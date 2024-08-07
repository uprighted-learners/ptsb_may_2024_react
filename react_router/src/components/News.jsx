import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Post from './Post'

const News = () => {
  let data = [
    { id: 1, name: "Post1" },
    { id: 2, name: "Post2" },
    { id: 3, name: "Post3" },
    { id: 4, name: "Post4" },
    { id: 5, name: "Post5" },
  ];

  return (
    <div>
        <Routes>
            <Route path="post/:id" element={<Post />} />
        </Routes>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((i) => {
          return <Link key={i.id} to={`post/${i.id}`}>Go to Post {i.id}</Link>;
        })}
      </div>
    </div>
  );
};

export default News;
