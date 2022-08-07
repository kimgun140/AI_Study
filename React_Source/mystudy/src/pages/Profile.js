import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const data = {
  velopert: {
    name: "김민준",
    description: "리액트 러버",
  },
  kimgun: {
    name: "김건",
    description: "Happy man",
  },
};

const Profile = () => {
  const params = useParams();
  const Profile = data[params.username];
  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      {Profile ? (
        <div>
          <h2>{Profile.name}</h2>
          <p>{Profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
