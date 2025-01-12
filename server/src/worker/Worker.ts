import { parentPort } from 'worker_threads';
import workerLogic from './worker.logic.js';
import connectDB from '../dbConecction.js';

if (parentPort) {
  console.log('[Worker] Worker started and ready for messages.');
  connectDB()
  parentPort.on('message', async (message) => {
    if (message === 'buildQueue') {
      parentPort?.postMessage('[Worker] Building queue...');
      await workerLogic.initializeQueue();
      parentPort?.postMessage('[Worker] Queue built successfully.');
    } else if (message === 'processQueue') {
      parentPort?.postMessage('[Worker] Processing queue...');
      await workerLogic.processQueue();
      parentPort?.postMessage('[Worker] Queue processed successfully.');
    } else {
      parentPort?.postMessage(`[Worker] Unknown message: ${message}`);
    }
  });
} else {
  console.error('[Worker] parentPort is not available. Exiting...');
}
