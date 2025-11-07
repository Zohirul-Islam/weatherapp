"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`);
            })
        }
    },[pathName,searchParams])
  return (
      <div className='flex flex-col justify-center items-center h-screen text-white bg-slate-700'>
          {
              loading && <>
                  <Image src={'/network.jpg'} alt='network' height={500} width={500} className='border rounded-md my-4' />
                  <p className='text-4xl text-center'>Detecting Location..</p>
              </>
          }
    </div>
  )
}

export default LocationDetector