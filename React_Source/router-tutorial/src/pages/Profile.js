import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const data = {
  velopert: {
    name: "김건",
    description: "hello",
  },
  gildong: {
    name: "홍길동",
    desciption: "고전 소설 홍길동전의 주인공 ",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지않는 프로필입니다.</p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};

export default Profile;
