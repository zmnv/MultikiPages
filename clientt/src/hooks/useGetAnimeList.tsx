
import { response } from 'express';
import * as React from 'react';
import {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import {Post} from '../api/api'
import {Api, PageType} from '../types/post.interfase';


 
const useGetAnimePage = () => {

    const [list, setList] = useState<PageType[]>([])
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(() => {
		Post.getPosts()
			.then((data) => {
				setList(data);
                console.log('effect--good');
                
                
			})
			.catch((err) => {
				setIsError(true);
                console.log("effect-error")
			});
	}, []);
    
    return list
}
 
export default useGetAnimePage;