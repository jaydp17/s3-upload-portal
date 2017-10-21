import { Router } from 'express';

import signS3 from './sign-s3';
import users from './users';

const router = Router();

router.use(signS3);
router.use(users);

export default router;
