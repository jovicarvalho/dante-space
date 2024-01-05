import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt={`Imagem do post ${post.id}`}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler Artigo</button>
      </div>
    </Link>
  );
};

export default PostCard;
