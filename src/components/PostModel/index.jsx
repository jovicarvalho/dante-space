import styles from "./PostModel.module.css";

export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      />
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.PostContainer}>{children}</div>
    </article>
  );
}
