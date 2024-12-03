import { Schema, model } from 'mongoose';
import { TSemester } from './semester.interface';
import { months, semesterCode, semesterName } from './semester.utils';

export const SemesterSchema = new Schema<TSemester>({
    semesterName: {
        type: String,
        enum: semesterName,
    },
    year: String,
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

// middle ware
SemesterSchema.pre("save", async function (next) {
    const isExist = await SemesterModel.findOne({ year: this.year, semesterName: this.semesterName });
    if (isExist) {
        throw new Error("Semester Already exist")
    }
    next()
})
// create model
export const SemesterModel = model("semester", SemesterSchema)