const mongoose = require('mongoose')

const camperSchema = new mongoose.Schema({
   name: {
      type: Object
   },
   gender: {
      type: String,
      lowercase: true
   },
   address: {
      type: Object
   },
   dob: {
      type: Object
   },
   session: {
      type: Object
   },
   student: {
      type: String,
      lowercase: true
   },
   parent: {
      type: String,
      lowercase: true
   },
   relation: {
      type: String,
      lowercase: true
   },
   phone: {
      type: Object
   },
   emergencyContact: {
      type: String,
      lowercase: true
   },
   emergencyPhone: {
      type: Object
   },
   email: {
      type: String,
      lowercase: true
   },
   hearAbout: {
      type: String,
      lowercase: true
   },
   referal: {
      type: String,
      lowercase: true
   },
   restrictions: {
      type: String,
      lowercase: true
   },
   conditions: {
      type: String,
      lowercase: true
   },
   medications: {
      type: String,
      lowercase: true
   },
   allergies: {
      type: String,
      lowercase: true
   },
   dietary: {
      type: String,
      lowercase: true
   },
   photoRelease: {
      type: String,
      lowercase: true
   },
   signature: {
      type: String,
      lowercase: true
   }

})

const Camper = mongoose.model('Camper', camperSchema)

module.exports = Camper