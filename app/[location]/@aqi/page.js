import AqiComponent from "@/app/components/AqiComponent";
import React from "react";

const AqiPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AqiComponent lat={latitude} lon={longitude}/>;
};

export default AqiPage;
