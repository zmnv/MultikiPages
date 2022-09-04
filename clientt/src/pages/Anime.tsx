import * as React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import {Post} from "../api/api"
import {PageType} from '../types/post.interfase';

function AnimePage() {
  const { id } = useParams<{id?:string}>();

  const [page, setPage] = useState<PageType>()
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
		Post.getAPost(id)
			.then((data) => {
				setPage(data);

			})
			.catch((err) => {
				setIsError(true);
			});
		return () => {};
	}, []);
    
    
  return (<div>
    <ul>
      <li><Link to="/anime">Back</Link></li>
    </ul>
    <h1>{page?.name}</h1>
    <img src={`${page?.image}`} alt="" />
  </div>
  );
}

export default AnimePage;