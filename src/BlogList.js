import { Link } from "react-router-dom";


const BlogList  = ({blogs, blogTitle, deleteBlog}) => {
    // const blogs= props.blogs;
    // const blogTitle= props.blogTitle;
    // const deleteBlog= props.deleteBlog;
    // const handleDelete =() =>{
    //     fetch(`http://localhost:8000/blogs/$}`, {
    //         method:'DELETE'
    //     }).then(
    //         history.push('/')
    //     )
    // }
    return ( 
        <div className="container">
            <div>
                <h1>{blogTitle}</h1>
                {blogs.map((blog) =>(
                    <div className="blog-preview" key={blog.id} >
                        <div className="row">
                            <div className="col">
                                <Link to={`blogdetails/${blog.id}`}>
                                    <h3>{blog.title} <span> Written by : {blog.author}</span></h3> 
                                </Link>
                            </div>
                            <div className="col">
                                <button className="delete-blog-btn" onClick={ () => deleteBlog(blog.id)}>Delete Blog</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList ;