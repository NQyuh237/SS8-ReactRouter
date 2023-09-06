import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  // nhận data đã chuyển sang
  const data = useLocation();
  console.log(data);
  return (
    <>
      ContactPage
      {/* && toán tử if
      ?: toán tử 3 ngôi */}
      <p>{data.state && data.state.number}</p>
    </>
  );
}

export default ContactPage;
