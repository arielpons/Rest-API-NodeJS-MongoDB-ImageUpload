import 'dotenv/config';
import app from "./app.js";
import { connectToDB } from "./utils/mongoose.js";

function main() {
  connectToDB();
  app.listen(process.env.PORT || 3000);
  console.log("Server on port", process.env.PORT);
}

main();