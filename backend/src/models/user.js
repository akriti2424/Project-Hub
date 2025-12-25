const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
      default: "user",
    },
  },
  {
    timestamps: true, // ✅ FIXED
  }
);

// 🔐 Hash password before saving
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
 
});

module.exports = mongoose.model("User", userSchema);
