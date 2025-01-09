import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import VideoQueue from './classes/Queue';
import Worker from './openWorker';
dotenv.config();
import connectDB from './dbConecction';

connectDB();

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! Express + TypeScript Server is running!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    if(VideoQueue.isEmpty()){
        Worker.postMessage('buildQueue');
    }
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
