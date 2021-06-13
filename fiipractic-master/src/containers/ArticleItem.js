import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlesItem = (props) => {
  console.log(props, " asta-i elementul cautat");
  const [post, setPost] = useState({});
  const { id } = useParams();
  const fetchPost = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => setPost(post));
  };
  console.log(id);

  useEffect(() => {
    fetchPost();
  }, []);
  return <div>{post.title}</div>;
};

export default ArticlesItem;
