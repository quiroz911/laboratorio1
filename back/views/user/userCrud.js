import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const userCrud = express.Router();

userCrud.route("/user").post(async (req, res) => {
  //   const clientes = await prisma.test.findMany();
  try{
    const datosUser = req.body;
    const nuevoUser = await prisma.user.create({
      data: {
        email: datosUser.email,
        enterpriseId: datosUser.enterpriseId,
        role: datosUser.role,
      },
    });
    res.status(200).json({ user: true, nuevoUser });
  }
  catch{
    res.status(400).json();
  }
});



export { userCrud };
