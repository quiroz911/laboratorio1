import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const enterpriseCrud = express.Router();

enterpriseCrud.route("/enterprise").post(async (req, res) => {
  try {
    const datosEnterprise = req.body;
    const nuevaEnterprise = await prisma.enterprise.create({
      data: {
        name: datosEnterprise.name,
        users: {
          connect: {
            email: datosEnterprise.users.email,
          },
        },
      },
    });

    res.status(200).json({ user: true, nuevaEnterprise });
  } catch {
    res.status(400).json();
  }
});

export { enterpriseCrud };
