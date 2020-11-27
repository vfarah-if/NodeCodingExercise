import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    sessionId: { type: ObjectId, required: true },
    courseId: { type: ObjectId, required: true },
    userId: { type: String, required: true },    
    totalModulesStudied: { type: Number, required: true },
    timeStudied: { type: Number, required: true },    
});

export default mongoose.model("session", sessionSchema);