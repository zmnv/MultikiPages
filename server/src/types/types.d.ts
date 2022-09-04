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

// FYI: ты мог юзать один и тот же файл с типами и на клиенте и на сервере

export {databaseTypes, animePageTypes, TypedRequestBody}