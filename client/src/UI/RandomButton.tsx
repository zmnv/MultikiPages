// TODO: поудаляи лишнее
import React from 'react'
import { useEffect, useState } from "react";
import { Navigate, NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import useGetAnimePage from '../hooks/useGetAnimeList';


function RandomButton() {   
    const list = useGetAnimePage()
    const randomNumber = Math.floor(Math.random() * list.length)

    // FYI: можно еще с useCallback познакомиться
    function linkTo(){
        if (!list) return null
        if (list[randomNumber]){
            return list[randomNumber].id
        }
        
    }

    // FYI: форматни красиво
    return (
        <div>
            <h2>
                <ul>
                <li><Link replace={true} to={`/anime/${linkTo()}`}>Random Anime</Link></li>
                </ul>
            </h2>
        </div>
    )
    
}

export default RandomButton;