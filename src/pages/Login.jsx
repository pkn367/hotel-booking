import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // simulate JWT token
    localStorage.setItem("token", "dummy-jwt-token");
    alert("Logged in!");
    navigate("/hotels");
  };

  return (
    <div style={container}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <p onClick={() => navigate("/signup")} style={link}>
        New user? Signup
      </p>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#111",
  color: "white",
};

const link = {
  marginTop: "10px",
  cursor: "pointer",
  color: "lightblue",
};
