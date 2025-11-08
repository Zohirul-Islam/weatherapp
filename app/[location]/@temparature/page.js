import TemparatureComponent from '@/app/components/TemparatureComponent'
import React from 'react'
import NoLocation from "@/app/components/NoLocation";
import { getResolvedLatLon } from "@/lib/location-info";
const Temparature = async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {

  const resolved = await getResolvedLatLon(location, latitude, longitude)
  if (resolved?.lat && resolved?.lon) {
    return <TemparatureComponent lat={resolved.lat} lon={resolved.lon}/>;
  } else {
    return <NoLocation/>
  }
}

export default Temparature