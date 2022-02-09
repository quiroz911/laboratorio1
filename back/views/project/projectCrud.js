import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const projectCrud = express.Router();

projectCrud.route("/project").post(async (req, res) => {
  //try {
    const datosProject = req.body;
    const nuevoProject = await prisma.project.create({
      data: {
        name: datosProject.name,
        description: datosProject.description,
      },
    });

    res.status(200).json({ user: true, nuevoProject });
  //} catch {
    //res.status(400).json();
  //}
});

export { projectCrud };
