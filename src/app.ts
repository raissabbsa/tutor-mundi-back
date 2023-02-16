import express from "express";
import starRouter from "./routers/starsRouters.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors())

server.use(starRouter);

const port = process.env.PORT;
server.listen(port, () => {console.log(`server runing on port ${port}`)});
