import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema<User>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default UserSchema;
