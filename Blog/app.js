const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');
require('dotenv').config()

const homeStartingContent = "Hey! This is a Blog Web-page! Here you can read and write your jorney and just see what I can develop as a programmer! I'm glad to see you here! Enjoy!";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('useNewUrlParser', true);

mongoose.set('useUnifiedTopology', true);

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_URL);

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {

  Post.find({}, function(err, posts){
    res.render("home", {homeStartingContent: homeStartingContent, posts: posts});
  });

  // document.getElementsByTagName('h1').click(function() {
  //   res.redirect("/posts/:postName");
  // });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post ({
   title: req.body.postTitle,
   content: req.body.postBody
  });

  post.save(function(err){
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
});


app.get("/posts/:postId", function(req,res){
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){

    res.render("post", {post: post});
 
  });
});

app.post("/delete", function(req, res){
  const requestedPostId = req.body.postId;

  Post.findByIdAndRemove(requestedPostId, function(err, post){
    if (err) {
      console.log(err);
    }
  })

  res.redirect("/");

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
};
app.listen(port, function() {
  console.log("Server started on port 3000");
});
