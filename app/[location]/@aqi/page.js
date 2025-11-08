import AqiComponent from "@/app/components/AqiComponent";
import NoLocation from "@/app/components/NoLocation";
import { getResolvedLatLon } from "@/lib/location-info";
import React from "react";

const AqiPage = async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude)
  if (resolved?.lat && resolved?.lon) {
    return <AqiComponent lat={resolved.lat} lon={resolved.lon}/>;
  } else {
    return <NoLocation/>
  }
  
};

export default AqiPage;
