import { model, Schema } from 'mongoose';
import { TFaculty } from './faculty.interface';

export const FacultySchema = new Schema<TFaculty>({
    name: {
        type: String,
        required: true,
        unique: true,
    }
})


// create model
export const FacultyModel = model("faculty", FacultySchema)