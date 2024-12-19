import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new student
export const createStudent = async (req, res) => {
  const { name, cohort, course, dateJoined, lastLogin } = req.body;
  let courseArr= Array.of(course)
  try {
    const newStudent = await prisma.student.create({
      data: { name, cohort, course :courseArr, dateJoined: new Date(dateJoined), lastLogin: new Date(lastLogin) },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await prisma.student.findUnique({ where: { id: parseInt(id) } });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, cohort, course, dateJoined, lastLogin } = req.body;
  try {
    const updatedStudent = await prisma.student.update({
      where: { id: parseInt(id) },
      data: { name, cohort, course, dateJoined: new Date(dateJoined), lastLogin: new Date(lastLogin) },
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.student.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
