import React from "react";
import { useNavigate } from "react-router-dom";

function DemoNavigate() {
  // Được sử dụng để chuyển trang, sử dụng với history của trình duyệt
  // useNavigate là 1 hook được cung cấp bởi react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      {/* Để chuyển trang Contact Page */}
      <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
      {/* Sử dụng navigate với history */}
      <button onClick={() => navigate(-1)}>Back</button>
      {/* sử dụng navigate với replace=true => không lưu history */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        {" "}
        Go to Contact Page - not save hisory
      </button>
      {/* Sử dụng navigate để truyền dữ liệu => để lấy được dữ liệu ở (contactPage)  sử dụng useLocaltion để nhận dữ liệu*/}
      <button onClick={() => navigate("/contact", { state: { number: 19 } })}>
        Go to Contact with data
      </button>
    </div>
  );
}

export default DemoNavigate;
