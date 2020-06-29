
import { model, Schema } from 'mongoose';
import { IUser } from 'server/interfaces/IUser';

const userSchema = new Schema(
            {
                username: {
                    type: String,
                    unique: true,
                    required: true,
                    lowercase: true
                },
                firstName: {
                    type: String,
                    required: true
                },
                lastName: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
            },
            {
                timestamps: true
            }
        );

export default model<IUser>('user', userSchema);