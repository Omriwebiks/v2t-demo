import {Router, Request, Response } from 'express';
import uploadeController from './uploade.controller.js';
import exp from 'constants';

const router = Router();
//crud
//create
router.post('/', (req: Request, res: Response) => {
    res.json('create project');
})
//read
router.get('/projects', (req: Request, res: Response) => {
    res.json('get project');
})

router.get('/:projectId', (req: Request, res: Response) => {
    res.json('get project');
})
//update
router.put('/:projectId', (req: Request, res: Response) => {
    res.json('update project');
})
//delete
router.delete('/:projectId', (req: Request, res: Response) => {
    res.json('delete project');
})

//{projectid}/upload
router.use('/upload-video', uploadeController);

export default router;

