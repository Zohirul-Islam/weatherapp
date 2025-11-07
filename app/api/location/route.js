import { getLocation } from "./location-utils";

/* this route will return location data from location utils file */
export async function GET() {
    const locationData = getLocation();
    return Response.json(locationData);
}