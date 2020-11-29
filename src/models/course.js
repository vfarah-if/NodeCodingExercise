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
  stats: {
    sessionCount: { type: Number, required: true },
    averageScore: { type: Number, required: true },
    totalModulesStudied: { type: Number, required: true },
    timeStudied: { type: Number, required: true },
  },
});
courseSchema.index({ courseId: 1, userId: 1 }, { unique: true });

export default mongoose.model("course", courseSchema);
