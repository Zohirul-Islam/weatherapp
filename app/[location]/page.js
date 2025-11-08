import React from 'react'
import LocationInfo from '../components/LocationInfo'

const Locationpage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <LocationInfo lat={ latitude} lon={longitude} />
  )
}

export default Locationpage