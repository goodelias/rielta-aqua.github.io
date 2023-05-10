import { body } from "express-validator";

export const postCreateValidation = [
  body("title", "Title is missing").isLength({ min: 3 }).isString(),
  body("text", "Text is missing").isLength({ min: 3 }).isString(),
  body("tags", "Wrong tags format").optional().isString(),
  body("imageUrl", "Wrong URL of the image").optional().isString(),
];