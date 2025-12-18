import mongoose, { Schema } from "mongoose";

const resourceSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
     category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorys",
    },
    status:{
      type:String,
      enum:['DRAFT','PUBLISHED','ARCHIVED'],
      default:"DRAFT"
    }
  },
  {
    timestamps: true,
  },
);

export default Resources = mongoose.model("Resources", resourceSchema);
