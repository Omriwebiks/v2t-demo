import { ObjectId } from "mongoose";

class VideoQueue  {
    static queue: ObjectId[] = [];

    static enqueue(videoId:ObjectId) {
        VideoQueue.queue.push(videoId);
        console.log(`[Queue] Video ID ${videoId} added to the queue.`);
    }

    static dequeue() {
        if (VideoQueue.isEmpty()) {
            return null;
        }
        const videoId = VideoQueue.queue.shift();
        console.log(`[Queue] Video ID ${videoId} dequeued for processing.`);
        return videoId;
    }

    static isEmpty() {
        return VideoQueue.queue.length === 0;
    }

    static size() {
        return VideoQueue.queue.length;
    }
}

export default VideoQueue;
