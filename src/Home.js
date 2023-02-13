import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

      const {
        blogData:blogData, setBlogData: setBlogData, isPending:isPending, error:error
      } = useFetch('http://localhost:8000/blogs');


    const [name, setName] = useState('Bilal');
    const [blogTitle, setBlogTitle] = useState('This is Blog Page');
    const [age, setAge] = useState(40);
    const history = useHistory();

    const handleClick = (e) =>{
        console.log('Button clicked' , e);
    }

    const handleClickAgain = (name , e) => {
        console.log(name   +" this is screen x" + e.screenX , e);
        setAge(45);
        setName('Bilal Malik');
    }


     const deleteBlog =(id) =>{
        fetch(`http://localhost:8000/blogs/${id}`, {
            method:'DELETE'
        }).then(
            reloadPage()
        )
    }

    const reloadPage = () => {
        window.location.reload()
      }

    return ( 
        <div className="home">
            {/* <p>{blogTitle}</p> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blogData && <BlogList blogs={blogData} blogTitle={blogTitle}  deleteBlog={deleteBlog}/>}
            
            <h1>Home page</h1>
            <h2>My name is {name} and age is {age}</h2>
            <button className="myBtn btn btn-primary" onClick={handleClick}>click me </button>
            <button className="myBtn btn btn-success" onClick={(e) => {
                handleClickAgain('Bilal Malik' , e)
            }

            }>click me for name</button>
        </div>
     );
}
 
export default Home;
