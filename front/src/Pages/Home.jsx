import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [blog, setblog] = useState([]);

  const getBlog = async (e) => {
    const { data } = await axios.get("http://localhost:5000/blog");
    setblog(data);
    console.log(data);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      {blog.map((item) => {
        return (
          <div>
            <div className="container">
              <br />
              <div className="card">
                <div className="card-header alert-warning">
                  <h2>{item.title}</h2>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                    <img src={item.img} width="300px" height="300px" />
                    <h5>{item.desc}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div></div>
                    <Link to={`/blog-details/${item.id}`}>
                      <h4>- {item.author}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
