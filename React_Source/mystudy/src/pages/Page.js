import { useParams } from "react-router-dom";

const page = () => {
  const { id } = useParams;
  return (
    <div>
      왜안돼
      <ul>
        <h2>게시글{id}</h2>
      </ul>
    </div>
  );
};

export default page;
