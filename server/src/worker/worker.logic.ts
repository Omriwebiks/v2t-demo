import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import Utils from './utils';
import VideoQueue from '../classes/Queue';
import IVideo from '../types/interface/Ividoe';

async function processQueue() {
    console.log(`[Worker] Starting video processing...`);

    while (VideoQueue.size() > 0) {
        const videoId = VideoQueue.queue[0]; 
        console.log(`[Worker] Processing Video ID: ${videoId}`);
        try {
            const video:IVideo = await Utils.updateStatus(videoId, 'processing');

            const result = await Utils.sendToModel(video.url?video.url:"");

            if (result.success) {
                await Utils.updateStatus(videoId, 'completed');
            } else {
                await Utils.updateStatus(videoId, 'failed');
            }
            VideoQueue.dequeue();
        } catch (error) {
            console.error(`[Worker] Error processing Video ID: ${videoId}:`, error);
            await Utils.updateStatus(videoId, 'failed');
        }
    }

    console.log(`[Worker] Queue is empty. Stopping worker.`);
}


function simulateDatabaseFetch() {
    console.log('[Initializer] Simulating database fetch...');

    return  [
        {
            _id: new mongoose.Types.ObjectId(new ObjectId()),
            "status": "uploaded",
            "created_at": "2024-06-01T10:00:00"
        },
        {
            _id: new mongoose.Types.ObjectId(new ObjectId()),
            "status": "processing",
            "created_at": "2024-06-01T09:00:00"
        },
        {
            _id: new mongoose.Types.ObjectId(new ObjectId()),
            "status": "uploaded",
            "created_at": "2024-06-01T11:00:00"
        },
        {
            _id: new mongoose.Types.ObjectId(new ObjectId()),
            "status": "processing",
            "created_at": "2024-06-01T08:30:00"
        }
    ]
    
}

async function initializeQueue() {
    console.log('[Initializer] Starting queue initialization...');

    const videos = simulateDatabaseFetch();

    console.log(`[Initializer] Found ${videos.length} videos.`);

    videos.sort((a, b) => {
        if (a.status === b.status) {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }
        return a.status === 'processing' ? -1 : 1;
    });

    console.log('[Initializer] Videos sorted successfully.');

    // videos.forEach(video => {
    //     VideoQueue.enqueue(video._id);
    //     console.log(`[Initializer] Video ID: ${video._id} (Status: ${video.status}) added to the queue.`);
    // });

    console.log('[Initializer] Queue initialization completed.');

    await processQueue();
}

export default { initializeQueue, processQueue };


