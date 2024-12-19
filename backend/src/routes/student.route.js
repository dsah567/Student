import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent); // Create
router.get("/", getAllStudents); // Read All
router.get("/:id", getStudentById); // Read One
router.put("/:id", updateStudent); // Update
router.delete("/:id", deleteStudent); // Delete

export default router;
