import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";
import { FaSearch } from "react-icons/fa";

export default function NavigationBar() {
  return (
    <div className="w-screen">
      <nav>
        <div className="flex-row w-screen flex justify-between px-10 items-center pb-5">
          <div className="w-fit">
            <h1 className="text-xl border">Logo</h1>
          </div>
          <div className="w-fit">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Attorneys</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Forms</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="w-fit flex flex-row items-center gap-4 text-sm">
            <p className="font-bold text-md">(555) 123-4567</p>
            <button>
              <FaSearch />
            </button>
            <button className="bg-black rounded-full px-4 py-2 font-bold text-white">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
