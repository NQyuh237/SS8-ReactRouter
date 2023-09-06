import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
    // Dùng để xác định vị trí hiển thị của components
  return (
    <>
      <Outlet />
    </>
  );
}

export default AboutPage;
