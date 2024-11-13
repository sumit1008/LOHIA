import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
const TOKEN = "882e97fca1f66feefb858798937d905a";

if (!TOKEN) {
  console.error("Mailtrap token is missing. Please check your .env file.");
  process.exit(1);
}

export const client = new MailtrapClient({ token: TOKEN });

export const sender = {
  email: "hello@demomailtrap.com",
  name: "LOGIA Test",
};

// const recipients = [
//   {
//     email: "ss6156852@gmail.com",
//   },
// ];
