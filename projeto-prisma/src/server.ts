import "dotenv";
import app from "./app";

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log("API running on port", port);

  console.log("\nSwagger running on route http://localhost:3000/swagger");
});
