import IMulterFile from "../types/interface/IMulterFile.js";
import IVideoDTO from "../types/interface/DTO/IVideoDTO.js";
import { Request, Response, NextFunction } from "express";

interface IValidation {
  status: boolean;
  message: string;
}


const validation = (req: Request & { file?: IMulterFile }): IValidation => {
  const requiredFields: (keyof IVideoDTO)[] = [
    "userId",
    "projectId",
    "GT",
    "videoName",
  ];

  if (!req.file) {
    return { status: false, message: "File not uploaded" };
  }

  if (req.file.mimetype !== "video/mp4") {
    return { status: false, message: "File type not supported" };
  }

  if (!req.body) {
    return { status: false, message: "Data not uploaded" };
  }

  if (!requiredFields.every((field) => field in req.body)) {
    return { status: false, message: "Missing required fields" };
  }
  return { status: true, message: "" };
};


const videoValidate = (
  req: Request & { file?: IMulterFile },
  res: Response,
  next: NextFunction
) => {
  const validator: IValidation = validation(req);
  if (validator.status === false) {
    res.status(400).send(validator.message);
    return;
  } else {
    next();
  }
};

export default videoValidate;
