import PostModel from "../models/Post.js";

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec();

    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .slice(0, 5);
    res.json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get tags",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags.split(','),
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create article",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate({
      path: "user",
      select: ["fullName", "avatarUrl"],
    });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get articles",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.postId;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    )
      .populate("user")
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Article not found",
          });
        }

        return res.json(doc);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({
          message: "Failed to get article",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get article",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.postId;

    PostModel.findOneAndDelete({
      _id: postId,
    })
      .then((doc) => {
        // if (!doc) {
        //   return res.status(404).json({
        //     message: "Article not found",
        //   });
        // }

        res.json({
          success: true,
        });
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({
          message: "Failed to get article",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to delete article",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.postId;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        tags: req.body.tags.split(','),
        imageUrl: req.body.imageUrl,
        user: req.userId,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to update article",
    });
  }
};
