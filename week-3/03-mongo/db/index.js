const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  adminName: String,
  adminPassword: String,
  allCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  userName: String,
  userPassword: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
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