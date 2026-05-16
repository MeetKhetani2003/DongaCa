import mongoose, { Schema, model, models } from "mongoose";

const EnquirySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema);

export default Enquiry;
