import mongoose from "mongoose";
import validator from "validator";

const sessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true,
    lowercase: false,
    validate: (value) => validator.isUUID(value),
  },
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
  stats:{
    averageScore: { type: Number, required: true },
    totalModulesStudied: { type: Number, required: true },
    timeStudied: { type: Number, required: true },
  }
});
sessionSchema.index({ sessionId: 1, courseId: 1, userId: 1 }, { unique: true });

export default mongoose.model("session", sessionSchema);
