import { getLocationByCityName } from "../location-utils";

export async function GET(request,{params}) {
    const locationOfCity = getLocationByCityName(params?.name);
    return Response.json(locationOfCity);
}