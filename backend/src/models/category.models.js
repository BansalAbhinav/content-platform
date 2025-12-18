import mongoose,{Schema} from "mongoose";

const categorySchema = Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
     description:{
        type:String,
        required:true
    },
    createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
},{
    timestamps:true
})

export default Categorys = mongoose.model("Categorys",categorySchema);