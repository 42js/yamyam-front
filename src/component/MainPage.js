import { useUserState } from "../api/userContext";
import OrderPage from "./order/OrderPage";
import LandingPage from "./landing/LandingPage";

export default function MainPage() {
  const {isLogin} = useUserState();
  return (
    isLogin ? <OrderPage /> : <LandingPage />
  );
}