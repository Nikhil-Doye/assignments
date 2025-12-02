const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  adminID: mongoose.Schema.Types.UUID,
  adminName: String,
  adminPassword: String
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  userID: mongoose.Schema.Types.UUID,
  userName: String,
  userPassword: String
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  courseId: mongoose.Schema.Types.UUID,
  courseName: String,
  courseDescription: String,
  price: Number,
  imageLink: String,
  publish: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}