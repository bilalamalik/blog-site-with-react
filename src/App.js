// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import HomeBanner from './HomeBanner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
  const title = 'Welcome to new site';
  const likes = 50;
  const person = {}

  return (
    <Router>
      <div className="App container">
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
        <div className='content'>
          <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route path="/createblog">
               <CreateBlog></CreateBlog>
            </Route>
            <Route path="/blogdetails/:id">
               <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
               <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
