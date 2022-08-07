import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Page = () => {
  const { id } = useParams;
  return (
    <div>
      응 잘돼~
      <ul>
        <h2>게시글 {id}</h2>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </ul>
    </div>
  );
};

export default Page;
