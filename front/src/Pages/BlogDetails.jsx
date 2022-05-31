import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

export default function BlogDetails() {
  const [blogDetail, setblogDetail] = useState([]);

  const getBlogDetail = async (e) => {
    const { data } = await axios.get(`http://localhost:5000/blog/${id}`);
    setblogDetail(data);
    console.log(data);
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  const { id } = useParams();
  return (
    <>
      <br />
      <Link to={"/home"} className="btn btn-light">
        Back
      </Link>
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-between">
        <div>
          <img src={blogDetail?.img} alt={blogDetail.author} />
        </div>
        <h2>{blogDetail?.author}</h2>

        <div></div>
      </div>
    </>
  );
}
