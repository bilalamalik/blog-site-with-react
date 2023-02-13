import { Link } from "react-router-dom";


const Navbar  = () => {
    return (  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div className="container-fluid">
             <Link to="/" className="navbar-brand">The Blog Post</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <button className="btn btn-danger"> <Link to="/createblog">New Blog</Link></button>
                    </span>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar ;