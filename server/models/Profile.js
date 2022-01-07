const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'Undefined'],
    default: 'Undefined'
  },
  birthDate: {
    type: Date
  },
  phoneNumber: {
    type: String,
    match: /^\d{3}-\d{3}-\d{4}$/
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  availability: {
    type: [Date]
  }
});

module.exports = Profile = mongoose.model("profile", profileSchema);
