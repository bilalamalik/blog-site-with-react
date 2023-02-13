import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog= {title,body,author}
        console.log(blog);
        // isPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            // setIsPending(false);
            console.log("blog added");

        })
    }

    return ( 
        <div className="container">
            <div className="create">
                <h1>Add new Blog</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="blogName" className="form-label">Blog Name</label>
                        <input type="text" className="form-control" id="blogName" placeholder="Blog Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="blogContent" className="form-label">Blog Conetent</label>
                        <textarea className="form-control" id="blogContent" rows="3" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                    </div> 
                    <div className="mb-3">
                        <select class="form-select" aria-label="Default select example " onChange={(e)=>setAuthor(e.target.value)} >
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