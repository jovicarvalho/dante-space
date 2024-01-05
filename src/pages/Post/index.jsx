import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css";

const Post = () => {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <h1> Post não encontrado!</h1>;
  }
  return (
    <PostModelo
      fotoCapa={`/assets/posts/${params.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

export default Post;
