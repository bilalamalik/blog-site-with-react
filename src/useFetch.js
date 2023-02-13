import { useEffect, useState } from "react";

const useFetch = (url) =>{



    const [blogData, setBlogData] = useState(null);
    const [isPending , setIsPending] = useState(true)
    const [error , setError] = useState(null);

    
    useEffect(() =>{
        fetch(url)
        .then((response) => {
            console.log(response);
            if(!response.ok){
                throw Error('Could not fetch the data from server');
            }
            return response.json();
        } )
        .then((data) => {
            console.log(data);
            setBlogData(data);
            setIsPending(false);
        })
        .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);

        })
    }, [url]);
    return {blogData, setBlogData,isPending, error}
}

export default useFetch;