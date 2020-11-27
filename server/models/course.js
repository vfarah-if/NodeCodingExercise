import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseId: { type: ObjectId, required: true },
    userId: { type: String, required: true }
});

export default mongoose.model("course", courseSchema);