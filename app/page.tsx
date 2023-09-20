import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { Red_Hat_Display } from "next/font/google";
import Image from "next/image";
import { TbMapSearch, TbSearch, TbSparkles } from "react-icons/tb";

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
              <div className="p-5">
                <div className="relative">
                  <div className="absolute text-muted-foreground inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <TbMapSearch />
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
                        className="flex relative flex-col w-24 gap-2 h-full bg-accent/50"
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
                        className="flex flex-col w-24 gap-2 h-full bg-accent/50"
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
                        className="flex flex-col w-24 gap-2 h-full bg-accent/50"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
