import { NextResponse } from "next/server";

import {
  LocationRequest,
  RoutesRequestArrivalSearch,
  RoutesRequestDepartureSearch,
  TravelTimeClient,
} from "traveltime-api";

const travelTimeClient = new TravelTimeClient({
  applicationId: "c4107651",
  apiKey: "ba28a587dc1c46be2c54ae0aaf14ccd9",
});

const locations: LocationRequest[] = [
  { id: "London center", coords: { lat: 51.50893, lng: -0.131387 } },
  { id: "Hyde Park", coords: { lat: 51.508824, lng: -0.167093 } },
  { id: "ZSL London Zoo", coords: { lat: 51.536067, lng: -0.153596 } },
  //add some co-ords
];

const departure_search: RoutesRequestDepartureSearch = {
  id: "departure search example",
  departure_location_id: "London center",
  arrival_location_ids: ["Hyde Park", "ZSL London Zoo"],
  transportation: { type: "driving" },
  departure_time: new Date().toISOString(),
  properties: ["travel_time", "distance", "route", "fares"],
};

const arrival_search: RoutesRequestArrivalSearch = {
  id: "arrival search example",
  departure_location_ids: ["Hyde Park", "ZSL London Zoo"],
  arrival_location_id: "London center",
  transportation: { type: "public_transport" },
  arrival_time: new Date().toISOString(),
  properties: ["travel_time", "distance", "route", "fares"],
  range: { enabled: true, max_results: 1, width: 1800 },
};

export async function GET() {
  travelTimeClient
    .routes({
      locations: locations,
      departure_searches: [departure_search],
      arrival_searches: [arrival_search],
    })
    .then((data) => {
      return NextResponse.json(data);
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.error();
    });
}

export async function POST() {
  return NextResponse.json({
    body: "This is the POST endpoint",
  });
}
