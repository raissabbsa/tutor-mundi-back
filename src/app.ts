import express from "express";
import starRouter from "./routers/starsRouters.js";

const server = express();
server.use(express.json());

server.use(starRouter);


server.listen(4000, () => {console.log("server runing on port 4000")});
