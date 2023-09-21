import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Icons } from "./icons";
import { Home, LayoutGrid, UserCircle, HelpCircle } from "lucide-react";

const red_hat_display = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


// sidebar element
const Sidebar = () => {
  return (
    <div className="hidden md:block">
      <div className="w-[220px] transition-all duration-300 ease-in-out">
        <div className="fixed z-20 h-full w-[220px] select-none bg-transparent">
          <Link href={`/`} className="absolute top-0 mx-5 my-6">
            <div className="relative transition-all duration-1000 ease-in-out h-6">
              <Icons.uber className="text-black dark:text-white fill-current" />
            </div>
          </Link>
          <div
            className={`mt-8 flex flex-col items-center justify-center gap-1 px-2 pt-16`}
          >
            <Link
              href={"/"}
              className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-200 ease-in-out hover:cursor-pointer hover:gap-2.5 hover:bg-muted hover:ring-1 hover:ring-accent active:scale-[0.98]"
            >
              <Home className="h-5 w-5" />
              <span className={`${red_hat_display.className} font-medium`}>
                Home
              </span>
            </Link>

            <Link
              href={"/rides"}
              className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-200 ease-in-out hover:cursor-pointer hover:gap-2.5 hover:bg-muted hover:ring-1 hover:ring-muted active:scale-[0.98]"
            >
              <LayoutGrid className="h-5 w-5" />
              <span className={`${red_hat_display.className} font-medium`}>
                Rides
              </span>
            </Link>

            <Link
              href={"/me"}
              className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-200 ease-in-out hover:cursor-pointer hover:gap-2.5 hover:bg-muted hover:ring-1 hover:ring-accent active:scale-[0.98]"
            >
              <UserCircle className="h-5 w-5" />
              <span className={`${red_hat_display.className} font-medium`}>
                Me
              </span>
            </Link>

            <Link
              href={"/help"}
              className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-1.5 transition-all duration-200 ease-in-out hover:cursor-pointer hover:gap-2.5 hover:bg-muted hover:ring-1 hover:ring-muted active:scale-[0.98]"
            >
              <HelpCircle className="h-5 w-5" />
              <span className={`${red_hat_display.className} font-medium`}>
                Help
              </span>
            </Link>
          </div>
          <div className="absolute bottom-0 p-5">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
