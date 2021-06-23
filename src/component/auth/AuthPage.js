import { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import queryString from "query-string";

export default function AuthPage({ auth, setAuth }) {
  const location = useLocation();

  useEffect(() => {
    const query = queryString.parse(location.search);
    
    // TODO: API와 연동해야 함
    console.log(query.token);
    setAuth(true);
  }, [location, setAuth]);

  return (
    <>
      {auth && <Redirect to={{pathname: "/"}}/>}
    </>
  )
}