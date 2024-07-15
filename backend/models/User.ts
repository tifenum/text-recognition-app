import mongoose, { Document, Schema } from 'mongoose';

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  solde: {
    type: Number,
    required: true
  }
});

export interface UserDocument extends Document {
  email: string;
  password: string;
  accounts: {
    name: string;
    solde: number;
  }[];
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accounts: [accountSchema]
});

export default mongoose.model<UserDocument>('User', UserSchema);
