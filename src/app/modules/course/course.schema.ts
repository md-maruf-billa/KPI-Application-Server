import { Schema, model } from 'mongoose';
import { TCourse, TPrerequisitCoureses } from './course.interface';

export const preRequisitCourseSchema = new Schema<TPrerequisitCoureses>({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: false,
        unique: true,
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false,
    },
});

export const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    },
    preRequisitCoureses: {
        type: [preRequisitCourseSchema], // Changed to an array
        required: false,
        default: [], // Optional: Default to an empty array if not provided
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false,
    },
});

// Create model
export const couresModel = model('course', courseSchema);
