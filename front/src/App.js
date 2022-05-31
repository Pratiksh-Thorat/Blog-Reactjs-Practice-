import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import AddBlog from "./Pages/AddBlog";
import Home from "./Pages/Home";
import BlogDetails from "./Pages/BlogDetails";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/home"} component={Home}></Route>
        <Route path={"/addblog"} component={AddBlog}></Route>
        <Route path={"/blog-details/:id"} component={BlogDetails}></Route>
        <Route path={"/signup"} component={Signup}></Route>
        <Route path={"/login"} component={Login}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
