import { Router } from "express";
import { postStars } from "../controllers/starsControllers.js"
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";

const starRouter = Router();

starRouter.post("/stars",  validateSchemaMiddleware, postStars);

export default starRouter;