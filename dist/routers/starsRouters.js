import { Router } from "express";
import { postStars } from "../controllers/starsControllers";
var starRouter = Router();
starRouter.post("/stars", postStars);
export default starRouter;
