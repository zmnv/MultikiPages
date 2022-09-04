interface IAnimePage {
    id: string
    name: string
    image: string
}
interface IAnimePage extends Array<animePageTypes>{}

type ApiDataType = {
    animeList: IAnimePage[]
    animePage: IAnimePage
}

