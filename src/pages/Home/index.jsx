import Banner from "components/Banner";
import * as React from "react";
import styles from "./Home.module.css";
import posts from "json/posts.json";
import Post from "components/Post";
import Footer from "components/Footer";
const Home = () => {
  return (
    <>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={posts.id}>
            {" "}
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
