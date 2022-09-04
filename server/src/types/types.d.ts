interface databaseTypes {
    anime: []
}

interface animePageTypes {
        id: string
        name: string
        image: string  
}
interface animePageTypes extends Array<animePageTypes>{}

interface TypedRequestBody<T> extends Express.Request {
    body: T
}

export {databaseTypes, animePageTypes, TypedRequestBody}