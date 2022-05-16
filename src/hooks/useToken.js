import axios from "axios";
import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      //   const email = "";
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://guarded-escarpment-12321.herokuapp.com/login",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        console.log(data);
      }
    };
    getToken();
  }, [user]);
  return [token, setToken];
};
export default useToken;
