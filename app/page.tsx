import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Atom, Search, Sparkles } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import Image from "next/image";

const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className={`${red_hat_display.className}`}>
      <div className="h-full">
        <div className="flex h-full min-h-[100vh] flex-row">
          <Sidebar />
          <div className="grow lg:pb-2 lg:pr-2 lg:pt-2">
            <div className="h-full bg-background shadow-sm md:dark:border lg:rounded-lg">
              <div className="px-6 py-6">
                <div className="relative">
                  <div className="absolute text-muted-foreground inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4" />
                  </div>
                  <Input
                    placeholder="Where to?"
                    className="md:w-1/2 w-full pl-9 bg-accent/50"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-12">
                  <span className="text-2xl font-medium inline-flex gap-1 items-center">
                    Suggestions
                    <Sparkles className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="flex flex-row gap-3 h-28">
                      <Button
                        className="flex relative flex-row w-72 gap-2 px-2 h-full"
                        variant={"default"}
                      >
                        <Image
                          src="/uber-black.png"
                          alt={"Uber black image"}
                          width={64}
                          height={64}
                        />
                        <div className="flex flex-col w-full text-left">
                          <span className="font-semibold text-xl">Ride</span>
                          <span className="text-sm text-muted">
                            Quickly get a ride with Uber
                          </span>
                        </div>
                      </Button>
                      <Button
                        className="flex relative flex-col w-28 gap-2 h-full bg-accent/50"
                        variant={"outline"}
                      >
                        <Image
                          src="/rentals.png"
                          alt={"Rentals image"}
                          width={44}
                          height={44}
                        />
                        Rent
                        <Badge className="bg-green-500 border border-input absolute -bottom-3 hover:bg-green-500">
                          Promo
                        </Badge>
                      </Button>
                      <Button
                        className="flex flex-col w-28 gap-2 h-full bg-accent/50"
                        variant={"outline"}
                      >
                        <Image
                          src="/package.png"
                          alt={"Package image"}
                          width={44}
                          height={44}
                        />
                        Package
                      </Button>
                      <Button
                        className="flex flex-col w-28 gap-2 h-full bg-accent/50"
                        variant={"outline"}
                      >
                        <Image
                          src="/reserve.png"
                          alt={"Reserve image"}
                          width={44}
                          height={44}
                        />
                        Reserve
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 mt-12">
                  <span className="text-2xl font-medium inline-flex gap-1 items-center">
                    Save & Plan with Uber
                    <Atom className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="flex flex-row gap-3 h-56">
                      <Button
                        className="flex flex-col items-start gap-3 py-4 w-1/3 h-full bg-background border-0"
                        variant={"outline"}
                      >
                        <div className="flex rounded-lg relative flex-col w-full gap-2 h-full overflow-hidden bg-accent/50">
                          <Image
                            src="/moto.jpeg"
                            alt={"Moto image"}
                            fill={true}
                            draggable={false}
                            objectFit="cover"
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xl font-medium">
                            Uber Moto Rides
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Affordable motorcycles pick-ups
                          </span>
                        </div>
                      </Button>
                      <Button
                        className="flex flex-col items-start gap-3 py-4 w-1/3 h-full bg-background border-0"
                        variant={"outline"}
                      >
                        <div className="flex rounded-lg relative flex-col w-full gap-2 h-full overflow-hidden bg-accent/50">
                          <Image
                            src="/shuttles.jpeg"
                            alt={"Shuttle image"}
                            fill={true}
                            draggable={false}
                            objectFit="cover"
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xl font-medium">
                            Shuttle Rides
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Low fares, premium rides
                          </span>
                        </div>
                      </Button>
                      <Button
                        className="flex flex-col items-start gap-3 py-4 w-1/3 h-full bg-background border-0"
                        variant={"outline"}
                      >
                        <div className="flex rounded-lg relative flex-col w-full gap-2 h-full overflow-hidden bg-accent/50">
                          <Image
                            src="/transit-intercity.png"
                            alt={"Transit intercity image"}
                            fill={true}
                            draggable={false}
                            objectFit="cover"
                            className="w-full rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-xl font-medium">
                            Travel Intercity
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Get to remote locations with ease
                          </span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
