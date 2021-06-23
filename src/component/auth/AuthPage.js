import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

export default function AuthPage({ setAuth }) {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = queryString.parse(location.search);
    
    // TODO: API와 연동해야 함
    console.log(query.token);
    setAuth(true);
    history.goBack();
  }, [location, setAuth, history]);

  // TODO: 로그인 중 대기 컴포넌트 디자인 제작
  return (
    <>

    </>
  )
}