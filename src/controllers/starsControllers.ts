import { Request, Response } from "express";
import starRepository from "../repositories/starsRepository.js";

async function postStars(req: Request, res: Response){
    const stars = res.locals.stars;
    try{
        await starRepository.createStar(stars.star);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export{
    postStars
}