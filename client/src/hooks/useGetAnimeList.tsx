import {useState, useEffect} from 'react'

import {Post} from '../api/api'
import {PageType} from '../types/post.interfase';


// TODO: useGetAnimeList vs useGetAnimePage
// кстати можно было бы просто useAnimeList. useGet странно.
const useGetAnimePage = () => {

    const [list, setList] = useState<PageType[]>([]);

    // TODO: isError никак не используется нахера он тут тогда
    const [isError, setIsError] = useState<boolean>(false);


    useEffect(() => {
        // TODO: Вынести запрос за пределы useEffect чтобы его можно
        // переиспользовать. 
        // TODO: создай функцию типа const fetch = useCallback(...)

        // Я не понимаю почему ты это Post называешь, какая логика?
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
    
    // TODO: экспортируй объект { list, fetch }
    // Расскажи, накой хер я так сделал и предлагаю это сделать?
    return list
}
 
export default useGetAnimePage;