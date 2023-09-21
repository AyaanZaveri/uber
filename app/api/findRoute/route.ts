import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const routeKey = process.env.ROUTES_API_KEY;

export async function POST(req: NextRequest) {
  const { lat1, long1, lat2, long2, departureTime } = await req.json();

  console.log(lat1, routeKey);

  const options = {
    method: "POST",
    url: "https://routes.googleapis.com/directions/v2:computeRoutes",
    headers: {
      "content-type": "application/json",
      "X-Goog-Api-Key": routeKey,
      "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs",
    },
    data: {
      origin: {
        location: {
          latLng: { latitude: 43.5625948, longitude: -79.64844269999999 },
        },
      },
      destination: {
        location: {
          latLng: { latitude: 43.589094599999996, longitude: -79.6427799 },
        },
      },
      travelMode: "TRANSIT",
      // departureTime: "2023-10-15T15:01:23.045123456Z",
      departureTime: departureTime,
      computeAlternativeRoutes: false,
      languageCode: "en-US",
      units: "METRIC",
    },
  };

  try {
    const { data } = await axios.request(options);

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
