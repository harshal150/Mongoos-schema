const mongoose = require('mongoose')

const subTodoSchema = new mongoose.Schema(
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
          }

    },{timestamps : true})

export const subTodo = mongoose.model("subTodo" , subTodoSchema)