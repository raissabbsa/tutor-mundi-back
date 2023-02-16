import { NextFunction, Request, Response } from "express";
import { starSchema } from "../schemas/starsSchema.js";

export default function validateSchemaMiddleware(req: Request, res: Response, next: NextFunction) {
  const stars = req.body;

  const {error} = starSchema.validate(stars, { abortEarly: false });
  if(error){
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.stars = stars;
  next();
}