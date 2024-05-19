// employeeController.js
const employeeSchema = require('../middlewares/validateEmployee');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addEmployee = async (req, res) => {
  try {
    const validatedData = employeeSchema.parse(req.body);
    const employee = await prisma.employes.create({
      data: validatedData,
    });
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the employee' });
  }
};

module.exports = {
  addEmployee,
};
