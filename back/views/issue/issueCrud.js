import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const issueCrud = express.Router();

issueCrud.route("/issue").post(async (req, res) => {
  try {
    const datosIssue = req.body;
    const nuevaIssue = await prisma.issue.create({
      data: {
        description: datosIssue.description,
        category: datosIssue.category,
        priority: datosIssue.priority,
        dueDate: datosIssue.dueDate,
        status: "NotAssigned",
      },
    });
    res.status(200).json({ user: true, nuevaIssue });
  } catch {
    res.status(400).json();
  }
});

issueCrud.route("/issue/type").put(async (req, res) => {
  try {
    const datosIssue = req.body;
    await prisma.issue.update({
      where: {
        id: datosIssue.id,
      },
      data: {
        category: datosIssue.category,
      },
    });
    res.status(200).json({ user: true });
  } catch {
    res.status(400).json();
  }
});

issueCrud.route("/issue/priority").put(async (req, res) => {
  try {
    const datosIssue = req.body;
    await prisma.issue.update({
      where: {
        id: datosIssue.id,
      },
      data: {
        priority: datosIssue.priority,
      },
    });
    res.status(200).json({ user: true });
  } catch {
    res.status(400).json();
  }
});

export { issueCrud };
