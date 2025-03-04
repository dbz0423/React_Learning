import { useUser } from "../context/UserLoginContext";

const LogoutButton = () => {
  const { logout } = useUser();

  return (
    <button onClick={logout} style={buttonStyle}>
      登出
    </button>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default LogoutButton;
