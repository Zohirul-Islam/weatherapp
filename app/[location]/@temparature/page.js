import TemparatureComponent from '@/app/components/TemparatureComponent'
import React from 'react'

const Temparature = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <TemparatureComponent lat={latitude} lon={longitude}/>
  )
}

export default Temparature