
import { Worker } from 'worker_threads';
import VideoQueue from './classes/Queue.js';

console.log('[Main Thread] Starting worker...');

const worker = new Worker("./src/worker/Worker.ts", {
    execArgv: ["--loader", "ts-node/esm"],
  });


worker.on('message', (message) => {
    console.log(`[Main Thread] Received from worker: ${message}`);
});

worker.on('error', (err) => {
    console.error('[Main Thread] Worker error:', err);
});

worker.on('exit', (code) => {
    console.log(`[Main Thread] Worker exited with code ${code}`);
});

const buildQueue = () => {
    if(VideoQueue.isEmpty()){
        worker.postMessage('buildQueue');
    }
}

const processQueue = () => {
    if(VideoQueue.size() == 1){
        worker.postMessage('processQueue');
    }
}
export default {buildQueue, processQueue}; 