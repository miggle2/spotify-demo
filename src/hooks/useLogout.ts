import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("access_token");

    queryClient.clear();

    // navigate(`/`);
    window.location.href = '/';
  };
  return logout;
};

export default useLogout;
