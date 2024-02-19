import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, Bell } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItem = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];
const Navber = () => {
  return (
    <header className="py-2 z-[10] sticky top-0 left-0 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="ml-2 lg:ml-0">Logo</div>
          {/* desktop navbar */}
          <div className="hidden lg:flex space-x-4">
            {navItem.map((route, i) => (
              <Button key={i} asChild variant="ghost">
                <Link
                  key={i}
                  href={route.link}
                  className="text-sm transition-colors font-medium"
                >
                  {route.name}
                </Link>
              </Button>
            ))}
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="main">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
          {/* mobile navbar */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="w-6 h-6 lg:hidden mr-2 lg:mr-2" />
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col mx-6 space-y-4 lg:space-x-6">
                  {navItem.map((route, i) => (
                    <Button key={i} asChild variant="ghost">
                      <Link
                        key={i}
                        href={route.link}
                        className="text-sm transition-colors font-medium"
                      >
                        {route.name}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navber;
