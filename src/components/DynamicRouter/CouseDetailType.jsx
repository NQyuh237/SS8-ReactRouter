import React from "react";
import { useParams } from "react-router-dom";

function CouseDetailType() {
    const param = useParams();
    console.log(param);
    return <div>Khoa hoc co id la: {param.name} - khoa hoc {param.Type}</div>;
}

export default CouseDetailType;
