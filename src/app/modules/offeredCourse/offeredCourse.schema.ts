import { Schema, model } from 'mongoose';
import { TOfferdCourse } from './offeredCourse.interface';

const offeredCourseSchema = new Schema<TOfferdCourse>({
    courseId: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
})
// create model
export const offeredCourseModel = model("offerdCourse", offeredCourseSchema)