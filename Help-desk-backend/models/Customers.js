const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fullname: {
      type: String,
      required: [true, "can't be blank"],
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      // index: true,
    },
  },
  { timestamps: true }
);

module.exports = Customers = mongoose.model('Customer', customerSchema);
