import { useUser } from "../context/UserLoginContext";

const UserStatus = () => {
  const { user } = useUser();

  return (
    <div style={statusStyle}>
      {user ? (
        <p>当前登录用户：{user.username}</p>
      ) : (
        <p>您尚未登录，请登录。</p>
      )}
    </div>
  );
};

const statusStyle = {
  marginTop: "20px",
  fontSize: "18px",
};

export default UserStatus;
