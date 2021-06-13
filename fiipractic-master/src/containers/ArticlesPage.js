import React, { useState, useEffect } from "react";
import ArticleComponent from "../components/ArticleComponent";
import "../styles/Articles.scss";

const ArticlesPage = (props) => {
  const [posts, setPost] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async (data) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/${data}`
    ).then((response) => response.json());
  };

  const deletePost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(setPost(posts.filter((item) => item.id !== id)));
  };

  const fetchUsersPost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((p) => setPost(p));
  };

  useEffect(() => {
    async function fetchElements() {
      const users = await fetchData("users");
      const posts = await fetchData("posts");
      setUsers(users);
      setPost(posts);
    }
    fetchElements();
  }, []);

  const showPosts = () => {
    return posts.map((post) => {
      return (
        <div key={post.id} className="articlesElement">
          <a href={`/articles/${post.id}`}>
            <ArticleComponent title={post.title} content={post.body} />
          </a>
          <button onClick={() => deletePost(post.id)}> X </button>
        </div>
      );
    });
  };

  const uploadInfo = async () => {
    let oldPosts = posts;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const newPost = oldPosts.push(json);
        console.log(oldPosts, "post");
        setPost(oldPosts);
      });
  };

  const getUserButtons = () => {
    return users.map((user) => (
      <button
        key={user.id}
        onClick={() => fetchUsersPost(user.id)}
      >{`User ${user.id} posts`}</button>
    ));
  };

  console.log(props);
  return (
    <div className="articlesPageContainer">
      {getUserButtons()}
      {showPosts()}
      <button onClick={() => uploadInfo()}></button>
    </div>
  );
};

export default ArticlesPage;
