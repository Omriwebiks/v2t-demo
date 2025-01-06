import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(morgan('dev'));

// Define a basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! Express + TypeScript Server is running!');
});

// Example of handling unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
