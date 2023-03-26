import mongoose from "mongoose";
import validator from "validator";

const { isEmail } = validator;

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, validate: [isEmail, "invalid email"] },
  membership: {
    type: String,
    enum: ["User", "Member", "Admin"],
    default: "User",
  },
  birth_date: { type: Date, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

export default mongoose.model("User", UserSchema);
