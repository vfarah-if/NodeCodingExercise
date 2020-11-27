import mongoose from "mongoose";
import validator from "validator";

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    validate: (value) => validator.isUUID(value),
  },
  userId: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    validate: (value) => !validator.isEmpty(value),
  },
});

export default mongoose.model("course", courseSchema);
