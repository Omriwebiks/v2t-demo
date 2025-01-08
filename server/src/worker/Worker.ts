import { parentPort } from 'worker_threads';
import workerLogic from './worker.logic';

parentPort?.on('buildQueue', (message) => {
    console.log(`[Worker] Building queue...`);
    workerLogic.initializeQueue()    
});

parentPort?.on('processQueue', (message) => {
    console.log(`[Worker] Building queue...`);
    workerLogic.processQueue()    
});
