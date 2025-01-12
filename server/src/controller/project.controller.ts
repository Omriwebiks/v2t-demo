import {Router, Request, Response } from 'express';
import uploadeController from './uploade.controller.js';
import exp from 'constants';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    res.json('create project');
})
router.get('/projects', (req: Request, res: Response) => {
    res.json('get project');
})

router.get('/:projectId', (req: Request, res: Response) => {
    res.json('get project');
})
router.put('/:projectId', (req: Request, res: Response) => {
    res.json('update project');
})
router.delete('/:projectId', (req: Request, res: Response) => {
    res.json('delete project');
})

router.use('/upload-video', uploadeController);

export default router;

