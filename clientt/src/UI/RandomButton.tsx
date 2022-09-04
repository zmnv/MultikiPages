
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
import {Post} from "../api/api"
import useGetAnimePage from '../hooks/useGetAnimeList';
import {PageType} from '../types/post.interfase';

function RandomButton() {   
    const list = useGetAnimePage()
    const randomNumber = Math.floor(Math.random() * list.length)
    // console.log(`randomNumber`, randomNumber);
    // console.log('list', list);
    // console.log('list', list.length);
    // console.log(list);
    function linkTo(){
        if (!list) return null
        if (list[randomNumber]){
            return list[randomNumber].id
        }
        
    }
    // console.log(list[randomNumber].id);
    // ${linkTo()}
    
    // const {id} = list[randomNumber];
    // console.log(id);
    
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