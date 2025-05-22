import mongoose from "mongoose";



const SubscriptionPlan = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    stripe_price_id:{
        type:String,
        required:true
    },
    trial_days:{
        type: Number,
        required:true
    },
    have_trail:{
        type:Boolean,
        default:false
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const User = mongoose.model("Subscription", SubscriptionPlan);