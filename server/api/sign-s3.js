import { Router } from 'express';
import { getUploadUrl } from '../utils/s3';

const router = Router();

router.get('/sign-s3', async (req, res) => {
  const { fileName, fileType } = req.query;

  if (!fileName) {
    return res.status(400).json({ error: 'fileName query param is required' });
  }
  if (!fileType) {
    return res.status(400).json({ error: 'fileType query param is required' });
  }

  const signedUrl = await getUploadUrl(fileName, fileType);
  return res.json({ signedUrl });
});

export default router;
