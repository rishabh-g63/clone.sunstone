

const mongoose = require('mongoose');



const mongoURI = 'mongodb://luckysahu28001:AHakos2hxHi8GJGD@localhost:27017/mydatabase';

mongoose.connect(mongoURI, {
 // useNewUrlParser: true,
  //useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define a schema for your data (e.g., application form data)
const applicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  state: String,
  program: String,
  mobile: String,
});

// Create a model based on the schema
const Application = mongoose.model('Application', applicationSchema);

// Example function to save form data to MongoDB
async function saveApplicationData(formData) {
  try {
    const application = new Application(formData);
    await application.save();
    console.log('Application data saved to MongoDB');
  } catch (err) {
    console.error('Error saving application data:', err);
  }
}
module.exports = { saveApplicationData };