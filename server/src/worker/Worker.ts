import { parentPort } from 'worker_threads';
import workerLogic from './worker.logic.js';

parentPort?.on('buildQueue',async (message) => {
    console.log(`[Worker] Building queue...`);
    await workerLogic.initializeQueue()    
});

parentPort?.on('processQueue', async (message) => {
    console.log(`[Worker] Building queue...`);
    await workerLogic.processQueue()    
});
