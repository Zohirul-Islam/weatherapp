import WindComponents from '@/app/components/WindComponents'
import React from 'react'

const Wind = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <WindComponents lat={latitude } lon ={longitude} />
  )
}

export default Wind