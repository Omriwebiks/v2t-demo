import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
  GetObjectCommand,
  GetObjectCommandInput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ region: "us-east-1" });
const Bucket = process.env.AWS_BUCKET_NAME;

const uploadToS3 = async (Key: string, Body: Buffer) => {
  if (!Bucket) throw new Error("AWS_BUCKET_NAME is not defined");
  const uploadParams = {
    Bucket,
    Key,
    Body,
  };
  const putCommand = new PutObjectCommand(uploadParams);
  await s3Client.send(putCommand);

  const headCommand = new HeadObjectCommand({ Bucket, Key });
  const headData = await s3Client.send(headCommand);
  if (!headData) throw new Error("File integrity check failed.");

  return `https://${Bucket}.s3.amazonaws.com/${Key}`;
};

const generatePresignedUrl = async (
  realUrl: string,
  expiration: number = 86400
): Promise<string | null> => {
  try {
    
    const url = new URL(realUrl);
    const objectKey = decodeURIComponent(url.pathname.slice(1)); 

    
    const s3Client = new S3Client({ region: "your-region" }); 

    
    const commandInput: GetObjectCommandInput = {
      Bucket,
      Key: objectKey,
    };

    
    const command = new GetObjectCommand(commandInput);

    
    const presignedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: expiration,
    });

    return presignedUrl;
  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return null;
  }
};

export default { uploadToS3, generatePresignedUrl };
