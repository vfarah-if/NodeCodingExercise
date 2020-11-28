import mongoose from "mongoose";
import validator from "validator";

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
    lowercase: false,
    validate: (value) => validator.isUUID(value),
  }
});

export default mongoose.model("course", courseSchema);
