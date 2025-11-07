import { getLocation } from "./location-utils";
export async function GET() {
    const locationData = getLocation();
    return Response.json(locationData);
}