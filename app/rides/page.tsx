"use client";

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Red_Hat_Display } from "next/font/google";
import React from "react";

const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  const [query, setQuery] = React.useState("");
  const [queryResults, setQueryResults] = React.useState<any>([]);

  async function searchRoute(searchQuery: string) {
    const response = await fetch(`/api/searchRoute?query=${searchQuery}`);
    const data = await response.json();
    setQueryResults(data);
  }

  console.log(queryResults);

  return (
    <main className={`${red_hat_display.className}`}>
      <div className="h-full">
        <div className="flex h-full min-h-[100vh] flex-row">
          <Sidebar />
          <div className="grow lg:pb-2 lg:pr-2 lg:pt-2">
            <div className="h-full bg-background shadow-sm md:dark:border lg:rounded-lg">
              <div className="px-6 py-8">
                <span className="text-3xl font-medium">Rides</span>
                <div className="flex flex-row gap-8 mt-12">
                  <div className="flex flex-col items-start space-y-4 w-full">
                    <Label htmlFor="origin" className="font-medium text-xl">
                      Origin
                    </Label>
                    <div className="flex flex-row items-center space-x-2 w-full">
                      <Input
                        id="origin"
                        placeholder="Point A"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <Button onClick={() => searchRoute(query)}>Find</Button>
                    </div>

                    {queryResults?.features?.length > 0
                      ? queryResults.features.map((result: any) => {
                          return (
                            <div key={result.id}>
                              <div>{result.place_name}</div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <div className="flex flex-col items-start space-y-4 w-full">
                    <Label
                      htmlFor="destination"
                      className="font-medium text-xl"
                    >
                      Destination
                    </Label>
                    <Input id="destination" placeholder="Point B" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
