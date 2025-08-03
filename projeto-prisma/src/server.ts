import "dotenv";
import app from "./app";

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => console.log("API running on port", port));
