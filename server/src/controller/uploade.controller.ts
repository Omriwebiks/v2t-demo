import { Request, Response, Router } from "express";
import multer from "multer";
import IMulterFile from "../types/interface/IMulterFile.js";
import uploadeService from "../services/uploade.service.js";

const storage = multer.memoryStorage();

const upload = multer({ storage });

const router = Router();

router.post(
  "/videos",
  upload.single("video"),
  async (req: Request & { file?: IMulterFile }, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).send("File not uploaded");
        return;
      }
      console.log(req.file);
      
      const answer = await uploadeService.uploadeVideo(req.file, req.body);
      res.status(201).send('35');
      return;
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  }
);

export default router;
