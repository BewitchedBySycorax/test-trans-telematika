import { Router } from 'express';
const router = Router();

import { getFiles, getFileBySecret } from '../controllers/index.controller';

router.get('/files-list', getFiles);
router.get('/files-list/:secret', getFileBySecret);

export default router;
