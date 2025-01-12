import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Worker from './openWorker.js';
import connectDB from './dbConecction.js';
import 'dotenv/config'
import projectController from './controller/project.controller.js';
import videoController from './controller/video.controller.js';


connectDB();

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(morgan('dev'));
app.use(express.static('uploads'));


app.use('/api/videos',videoController)
app.use('/api/project',projectController)


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    Worker.buildQueue();
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app;