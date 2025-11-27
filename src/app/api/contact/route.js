import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const doctor = formData.get("doctor");
    const message = formData.get("message");
    const MedicalReport = formData.get("MedicalReport");

    const unique_id = uuid();

    let medicalReportBuffer = null;
    let medicalReportName = null;

    if (MedicalReport) {
      const arrayBuffer = await MedicalReport.arrayBuffer();
      medicalReportBuffer = Buffer.from(arrayBuffer); // Convert to Buffer
      medicalReportName = MedicalReport.name; // Extract filename
    }

    // ✅ Insert into Database
    await pool.execute(
      "INSERT INTO contact (id, name, email, phone, address, message, MedicalReport, doc) VALUES(?,?,?,?,?,?,?,?)",
      [unique_id, fullname, email, phone, location, message, medicalReportName, doctor] // Store filename, NOT buffer
    );

    // ✅ Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // ✅ Admin Email with Attachment
    const mailOptionsAdmin = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Dr. Rajesh Jain - Contact Form",
      html: `
            <html>
              <body>
                <h3>You've got a new mail from ${fullname}, their email is: ✉️${email}, phone number is ${phone}, location is ${location}, and message is ${message}</h3>
                <p>Doctor:</p>
                <p>${doctor}</p>
              </body>
            </html>`,
      attachments: medicalReportBuffer
        ? [
          {
            filename: medicalReportName,
            content: medicalReportBuffer, // Attach buffer content
          },
        ]
        : [],
    };

    // ✅ Send Email to Admin
    await transporter.sendMail(mailOptionsAdmin);

    // ✅ User Confirmation Email
    const mailOptionsUser = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting Dr. Rajesh Jain",
      html: `<html>
            <body>
              <h2>Hey ${fullname}!</h2>
              <p>Thank you for reaching out to Dr. Rajesh Jain. Your query has been noted, and our team will contact you at the earliest.</p>
            </body>
           </html>`,
    };

    // ✅ Send Email to User
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
