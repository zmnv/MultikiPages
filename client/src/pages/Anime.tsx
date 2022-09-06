import * as React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import {Post} from "../api/api"
import {PageType} from '../types/post.interfase';

function AnimePage() {
  const { id } = useParams<{id?:string}>();

  const [page, setPage] = useState<PageType>()
  // TODO: этачо зачем откуда где
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    // FYI: вообще можно было бы использовать 
    // хук useGetAnimeList
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