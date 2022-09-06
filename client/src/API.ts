import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

// Во, нормас, я про это.
// Удали то лишнее
const getAnimeList = async () => {
    try{
        const animeList = await axios.get<ApiDataType> (
            baseUrl + "/anime"
        );
        return animeList;
    } catch (error) {
        throw (error);
      }
}

const getAnimePage = async (id: string | undefined) =>{
    try {
        const animePage = await axios.get(
            `${baseUrl}/anime/${id}`
        )
        return animePage;
    } catch (error) {
        throw (error);
      }
    
}

export {getAnimeList, getAnimePage} 
