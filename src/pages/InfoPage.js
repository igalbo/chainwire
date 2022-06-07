import React from "react";
import { useParams } from "react-router-dom";

const InfoPage = () => {
  let { pair } = useParams();
  return <div>Page for pair {pair}</div>;
};

export default InfoPage;
