import React from "react";
import { Navigate, Outlet} from "react-router-dom";

function PrivateRouter() {
  // Navigate khac useNavigate
  // sử dụng để chuyển trang khi return ở function component
  const isLogin = false;
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRouter;
