import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IAdminUser extends Document {
  username: string;
  password: string;
  comparePassword(candidate: string): Promise<boolean>;
}

const AdminUserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving
AdminUserSchema.pre('save', async function () {
  const user = this as unknown as IAdminUser;
  if (!user.isModified('password')) return;
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  } catch (err: any) {
    throw err;
  }
});

AdminUserSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);
