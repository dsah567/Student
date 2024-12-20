import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.route.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://student-three-livid.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));


app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.get("/",(req, res) => {
    res.send('hello world')
  })
app.use("/students", studentRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
