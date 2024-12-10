import { Schema, model } from "mongoose";
import { TCourse, TPrerequisitCoureses } from "./course.interface";

export const preRequisitCourseSchema = new Schema<TPrerequisitCoureses>({
    course: Schema.Types.ObjectId,
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
})

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
    preRequisitCoureses: preRequisitCourseSchema
})


// create model 
export const couresModel = model("course", courseSchema)