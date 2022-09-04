import { Router } from "express";

import { getAnimeList, getOneAnime } from "../controllers/controllers";

const router: Router = Router();

router.get("/api/anime", getAnimeList)

router.get("/api/anime/:id", getOneAnime)

export default router;