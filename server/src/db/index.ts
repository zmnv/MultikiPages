import {databaseTypes, animePageTypes} from '../types/types'

let dbjson = require('./db.json' )

const dbString = JSON.stringify(dbjson)

const dbs: databaseTypes  = JSON.parse(dbString);

const db: animePageTypes[] = dbs.anime

const animeName = db[3]

export {db, animeName};