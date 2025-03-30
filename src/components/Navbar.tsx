"use client";

// Imports NextJS Framework
import Image from "next/image";
import Link from "next/link";

// Imports shadcn components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../img/logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-primary dark:bg-slate-300 py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="Company logo" width={150} />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>BT</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mijn account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profiel</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Uitloggen</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
