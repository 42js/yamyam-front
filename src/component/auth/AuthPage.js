import axios from "axios";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { LOGIN, useUserDispatch } from "../../api/userContext";

export default function AuthPage() {
  const dispatch = useUserDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = queryString.parse(location.search);
    console.log(query.token);
    dispatch({
      type: LOGIN,
      token: query.token
    })
    axios.defaults.headers.common['Authorization'] = query.token; 
    history.push('/');
  }, [dispatch, location, history]);

  // TODO: 로그인 중 대기 컴포넌트 디자인 제작
  return (
    <>

    </>
  )
}