"use client"
import { getLocationLatLongList } from "@/lib/location-info";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const LocationList = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationList() {
        const locationList = await getLocationLatLongList();
        console.log(locationList);
      setLocations(locationList);
    }
    getLocationList();
  }, []);
  return (
    <div className="relative">
          <button onClick={() => { console.log('clicked'); setShowLocationList(!showLocationList)}}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((item) => (
              <li key={`${item.location}-${item.latitude}-${item.longitude}`}>
                    <Link
                        className="block hover:text-blue-600"
                  href={`/${item.city}?latitude=${item.latitude}&longitude=${item.longitude}`}
                >
                  {item.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationList;
