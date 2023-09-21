import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query");

  const options = {
    method: "GET",
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
    params: {
      proximity: "ip",
      access_token:
        "pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g",
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
