const mongoose = require("mongoose");


const orderItemSchema = new mongoose.Schema(
    {
        productId : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "Product"
        },
        quantity : {
            type : Number ,
            required : true
        }
    })

const orderSchema = new mongoose.Schema(
    {
        orderPrise : {
            type : Number , 
             required : true
        },
        customer : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "User"
        },
        orderItems : {
           type : [orderItemSchema]
        },
        address : {
            type : String,
            required : true
        },
        status : {
            type : String ,
            enum : ["PENDING" , "DELIVERED" , "CANCELLED"],
            default : "PENDING"
        }

    }, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema);
