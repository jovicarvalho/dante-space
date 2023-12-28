import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/posts/${post.id}/capa.png`}
        alt={`Imagem do post ${post.id}`}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className=""></button>
    </div>
  );
};

export default Post;
