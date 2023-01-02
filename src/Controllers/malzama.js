const Malzama = require("../models/Malazem");

// Async function that saves a new donation to the database
const malzama = async (req, res) => {
  // Get the request body
  const body = req.body;
  // Create a new Donation document using the request body
  const newMalzama = new Malzama({
    name: body.name,
    subject: body.subject,
    teacher: body.teacher,
  });
  // Save the new document to the Donation collection in the database
  await newMalzama.save();
  // Send a response with a success message
  res.send("Donation Added");
};

// Export the SendDonation function
module.exports = malzama;