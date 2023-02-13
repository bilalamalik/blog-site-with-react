import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogWriter, setBlogWriter] = useState('');
    const [isPending,setIsPending] = useState(false);
    const [ifEmpty, setIfEmpty] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog= {title:blogTitle,body:blogContent,author:blogWriter}
        console.log("title" + blogTitle+ "content"+ blogContent+ "Author" + blogWriter)
        if(blog.title && blog.body){
            setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setBlogTitle('');
            setBlogContent('');
            setBlogWriter('');
            setTimeout(blogPosted, 1000);
            setIfEmpty(false);
        })
        }
        else{
            setIfEmpty(true);
            console.log("both value are not available ");
        }
    }

    const blogPosted = () =>{
        setIsPending(false);
    }

    return ( 
        <div className="container">
            <div className="create">

            {isPending && <div className="blog-posted-msg">Thank you your blog is posted </div>}

                <h1>Add new Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="blogName" className="form-label">Blog Name</label>
                        <input type="text" className="form-control" id="blogName" placeholder="Blog Name" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)}/>
                        {ifEmpty && <lable className="empty-box-error-msg">Please fill out the information</lable>}
                    </div>
                    <div className="mb-3">
                        <label for="blogContent" className="form-label">Blog Conetent</label>
                        <textarea className="form-control" id="blogContent" rows="3" value={blogContent} onChange={(e)=>setBlogContent(e.target.value)}></textarea>
                        {ifEmpty && <lable className="empty-box-error-msg">Please fill out the information</lable>}

                    </div> 
                    <div className="mb-3">
                        <select class="form-select" aria-label="Default select example " value={blogWriter} onChange={(e)=>setBlogWriter(e.target.value)}>
                            <option value="Bilal">Bilal</option>
                            <option value="Qari">Qari</option>
                            <option value="Wasi">Wasi</option>
                        </select>
                    </div>
                    {/* <div className="mb-3">Blog Name : {blogTitle}</div>
                    <div className="mb-3">Blog Content : {blogContent}</div>
                    <div className="mb-3">Blog Writerf : {blogWriter}</div> */}

                    <div className="mb-5 ">
                        {!isPending && <button className="btn btn-danger"> Add</button>}
                        {isPending && <button className="btn btn-danger"> Adding Blog...</button>}
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default CreateBlog;