import { Request, Response, Router } from 'express';

const router = Router();


const videos: { id: number, title: string, url: string }[] = [];


router.get('/videos', (req: Request, res: Response) => {
    res.json(videos);
});


router.get('/videos/:id', (req: Request, res: Response) => {
    const video = videos.find(v => v.id === parseInt(req.params.id));
    if (video) {
        res.json(video);
    } else {
        res.status(404).send('Video not found');
    }
});



router.put('/videos/:id', (req: Request, res: Response) => {
    const video = videos.find(v => v.id === parseInt(req.params.id));
    if (video) {
        video.title = req.body.title || video.title;
        video.url = req.body.url || video.url;
        res.json(video);
    } else {
        res.status(404).send('Video not found');
    }
});


router.delete('/videos/:id', (req: Request, res: Response) => {
    const videoIndex = videos.findIndex(v => v.id === parseInt(req.params.id));
    if (videoIndex !== -1) {
        videos.splice(videoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Video not found');
    }
});

export default router;