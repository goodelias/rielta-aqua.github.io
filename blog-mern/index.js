  import express from "express";
  import mongoose from "mongoose";
  import multer from "multer";
  import cors from "cors";
  import * as dotenv from "dotenv";
  import { loginValidation, signupValidation } from "./middleware/auth.js";
  import authCheck from "./middleware/authz.js";
  import { postCreateValidation } from "./middleware/post.js";
  import * as UserController from "./controllers/UserController.js";
  import * as PostController from "./controllers/PostController.js";
  import handleValidationErrors from "./middleware/handleValidationErrors.js";
  import Post from "./models/Post.js";

  dotenv.config();

  mongoose
    .connect(
      `mongodb+srv://goodelias:${process.env.MONGO_PASSWORD}@cluster0.qsjswev.mongodb.net/blog?retryWrites=true&w=majority`
    )
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err));

  const app = express();

  const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, "uploads");
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage });

  app.use(express.json());
  app.use("/uploads", express.static("uploads"));
  app.use(cors());

  app.post(
    "/auth/login",
    loginValidation,
    handleValidationErrors,
    UserController.login
  );
  app.post(
    "/auth/signup",
    signupValidation,
    handleValidationErrors,
    UserController.signup
  );
  app.get("/auth/me", authCheck, UserController.getMe);

  app.post("/upload", authCheck, upload.single("image"), (req, res) => {
    res.json({
      url: `/uploads/${req.file.originalname}`,
    });
  });
  app.get('/tags', PostController.getLastTags);
  app.get("/posts/tags", PostController.getLastTags);

  app.get("/posts", PostController.getAll);
  app.get("/posts/:postId", PostController.getOne);
  app.post(
    "/posts",
    authCheck,
    postCreateValidation,
    handleValidationErrors,
    PostController.create
  );
  app.delete("/posts/:postId", authCheck, PostController.remove);
  app.patch(
    "/posts/:postId",
    authCheck,
    postCreateValidation,
    handleValidationErrors,
    PostController.update
  );

  app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Server OK");
  });
