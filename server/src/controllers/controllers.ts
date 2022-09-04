import { Response, Request } from "express" //Hello There!
import {db} from "../db";
import { animePageTypes, TypedRequestBody } from "../types/types";


const getOneAnime = async(req: Request, res: Response)=> {
    try {
        const id = String(req.params.id)
        const searchIndex = db.findIndex((page) => page.id === id)
        const animePage: animePageTypes = await db[searchIndex];
        res.status(200).json(animePage)
    }
    catch (error) {
        throw res.status(404).json({
            message: "not found"
        })
      }
}

const getAnimeList = async(req: Request, res: Response)=> {
    try {
        const animeList = await db;
        res.status(200).json(animeList)
    } catch (error) {
        throw res.status(404).json({
            message: "not found"
        })
        // console.log('not getted')
      };
}

export {getAnimeList, getOneAnime}