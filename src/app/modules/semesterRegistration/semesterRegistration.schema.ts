import { Schema, model } from 'mongoose';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { semesterRegistrationStatus } from './semesterRegistration.constant';

const semesterRegistrationSchema = new Schema<TSemesterRegistration>({
    semester: {
        type: Schema.ObjectId,
        required: true,
        unique: true,
        ref: "semester"
    },
    status: {
        type: String,
        enum: semesterRegistrationStatus,
        default: "UPCOMING"
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    minCredit: {
        type: Number,
        default: 3,
    },
    maxCredit: {
        type: Number,
        default: 16,
    }
}, {
    timestamps: true,
    versionKey: false
})

// create model
export const semesterRegistrationModel = model("semesterRegistrations", semesterRegistrationSchema)