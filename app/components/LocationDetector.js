"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
const LocationDetector = () => {
    /* ...........................logic start......................................... */

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
    }, [pathName, searchParams])

    /* ...........................logic end......................................... */
  return (
      <div className='flex flex-col justify-center items-center h-screen text-white bg-slate-700'>
          {
              loading && <>
                  <p className='text-4xl text-center text-red-800'>Detecting Location..</p>
              </>
          }
    </div>
  )
}

export default LocationDetector