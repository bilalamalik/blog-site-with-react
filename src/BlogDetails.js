import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const {blogData:blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleDelete =(id) =>{
        fetch(`http://localhost:8000/blogs/${id}`, {
            method:'DELETE'
        }).then(
            history.push('/')
        )
    }
    return ( 
        <div className="container">
            <div className="blog-detail">
                <h1>Blog Detail page</h1>
                {isPending && <div>Loading..</div>}
                {error && <div>{error}</div>}
                {blog && (
                <article>
                <h2>{blog.title} <span>Written by: {blog.author}</span></h2>
                <p>{blog.body}</p>
                </article>                
                )}
                <button className="delete-blog-btn" onClick={ () => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        </div>
     );
}
 
export default BlogDetails;