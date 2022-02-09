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
  } catch {}
});

export { issueCrud };
