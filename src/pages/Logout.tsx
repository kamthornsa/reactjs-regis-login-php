import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Logout = () => {
  const { setTokenAndRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setTokenAndRole();
    navigate("/", { replace: true });
  };
  // handleLogout();
  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <>Logout Page</>;
};

export default Logout;
