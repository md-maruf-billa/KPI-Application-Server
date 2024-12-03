import { Schema, model } from 'mongoose';
import { TSemester } from './semester.interface';
import { months, semesterCode, semesterName } from './semester.utils';

export const SemesterSchema = new Schema<TSemester>({
    semesterName: {
        type: String,
        enum: semesterName,
    },
    code: {
        type: String,
        enum: semesterCode,
    },
    startMonth: {
        type: String,
        enum: months,
    },
    endMonth: {
        type: String,
        enum: months,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    }
}, {
    timestamps: true,
    versionKey: false
});


// create model
export const SemesterModel = model("semester", SemesterSchema)