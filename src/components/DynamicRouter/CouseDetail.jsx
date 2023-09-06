import React from "react";
import { useParams } from "react-router-dom";

function CouseDetail() {
  // useParams là 1 hook được cung cấp bởi react-router-dom => lấy param trên url
  const param = useParams();
  console.log(param);
  return <div>khoa hoc co id la: {param.id}</div>;
}

export default CouseDetail;
