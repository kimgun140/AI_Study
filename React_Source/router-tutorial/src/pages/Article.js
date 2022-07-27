import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글{id}</h2>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
};

export default Article;
