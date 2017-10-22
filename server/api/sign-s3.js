import { Router } from 'express';
import randomstring from 'randomstring';

import { getUploadUrl } from '../utils/s3';
import { appendRandomSuffix } from '../utils/helpers';

const router = Router();

router.get('/sign-s3', async (req, res) => {
  const { fileName, fileType } = req.query;

  if (!fileName) {
    return res.status(400).json({ error: 'fileName query param is required' });
  }
  if (!fileType) {
    return res.status(400).json({ error: 'fileType query param is required' });
  }

  const suffix = randomstring.generate(7);
  const newFileName = appendRandomSuffix(fileName, suffix);
  const signedUrl = await getUploadUrl(newFileName, fileType);
  return res.json({ signedUrl, newFileName });
});

export default router;
