import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      <h2>Signup Page is Working</h2>
      <button onClick={() => navigate("/login")}>Go to Login</button>
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

