import prisma from "../database/db.js";

async function createStar(stars: number) {
    return prisma.stars.create({
        data: {
            evaluation: stars
        }
    })
}

const starRepository = {
    createStar
}

export default starRepository;
