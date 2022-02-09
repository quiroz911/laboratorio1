import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const adminCrud = express.Router();

adminCrud.route("/admin").get(async (req, res) => {
  const emails = await prisma.user.findMany();
  res.status(200).json({ emails });
});

export { adminCrud };
