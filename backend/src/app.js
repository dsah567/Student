import express from "express";
import bodyParser from "body-parser";
import studentRoutes from "./routes/student.route.js";

const app = express();

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.get("/",(req, res) => {
    res.send('hello world')
  })
app.use("/students", studentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
