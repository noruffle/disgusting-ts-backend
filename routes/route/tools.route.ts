import express from "express";
import { Controller } from "../../controllers/tools.controller";

const router = express.Router();


router.get('/calc', Controller['/calc'].get.callback)

router.post('/calc', Controller['/calc'].post.callback)

export default router;