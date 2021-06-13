import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TestPage = (props) => {
  const { id, type } = useParams();
  const [posts, setPost] = useState([]);
  console.log(props);
  const fetchUsersPost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((p) => setPost(p));
  };

  useEffect(() => {
    props.history.push(`ceva=?${id}tesrm/`);
  }, []);
  return <div>Pagina test</div>;
};

export default TestPage;
