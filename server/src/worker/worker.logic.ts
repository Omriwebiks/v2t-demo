import videoRepostory from '../reposetries/video.repostory.js';
import Utils from './utils.js';
import VideoQueue from '../classes/Queue.js';
import IVideo from '../types/interface/Ividoe.js';

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

async function initializeQueue() {
    console.log('[Initializer] Starting queue initialization...');

    const videos = await videoRepostory.getVideos({ status: { $in: ['uploaded', 'processing'] } });

    console.log(`[Initializer] Found ${videos.length} videos.`);

    videos.sort((a, b) => {
        if (a.status === b.status) {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        }
        return a.status === 'processing' ? -1 : 1;
    });

    console.log('[Initializer] Videos sorted successfully.');

    videos.forEach(video => {
        VideoQueue.enqueue(video._id);
        console.log(`[Initializer] Video ID: ${video._id} (Status: ${video.status}) added to the queue.`);
    });

    console.log('[Initializer] Queue initialization completed.');

    await processQueue();
}

export default { initializeQueue, processQueue };


