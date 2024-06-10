import { useNavigate } from "react-router-dom";

const RedirectURL = () => {
  const navigate = useNavigate();
  navigate(navigate.state ? navigate.state : "/");
};

export default RedirectURL;
