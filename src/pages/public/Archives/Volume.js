import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Volume() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/issue-archive");
  }, [navigate]);

  return null;
}

export default Volume;
