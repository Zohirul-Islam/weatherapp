import { getLocationByCityName } from "../location-utils";

export async function GET(request,{params}) {
    const locationData = getLocationByCityName(params?.name);
    return Response.json(locationData);
}