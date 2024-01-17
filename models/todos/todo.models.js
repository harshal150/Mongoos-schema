const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // reference given of user schema
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,  // reference given of subTodo schema
        ref: "subTodo",
      },
    ],  // array of subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
