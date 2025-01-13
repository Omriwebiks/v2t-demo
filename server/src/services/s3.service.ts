import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

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

export default uploadToS3;
