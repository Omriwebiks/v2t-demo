import { Request, Response, Router } from "express";
import multer from "multer";
import IMulterFile from "../types/interface/IMulterFile.js";
import uploadeService from "../services/uploade.service.js";
import videoValidate from "../middlewares/videoValidate.middelware.js";

const storage = multer.memoryStorage();

const upload = multer({ storage });

const router = Router();


router.post(
  "/:projectId",
  upload.single("video"),
  videoValidate,
  async (req: Request & { file?: IMulterFile }, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).send("File not uploaded");
        return;
      }
      
      const videoDate = {...req.body, projectId: req.params.projectId};

      const answer = await uploadeService.uploadeVideo(req.file, videoDate);
      res.status(201).send(answer);
      return;
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  }
);

export default router;
