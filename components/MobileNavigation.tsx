"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { avatarPlaceholderUrl, navItems } from "@/constants";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.action";

interface NavProps {
  $id: string;
  fullName: string;
  avatar: string;
  email: string;
  accountId: string;
}

const MobileNavigation = ({
  $id: ownerId,
  fullName,
  avatar,
  email,
  accountId,
}: NavProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="mobile-header">
      <Image
        src="/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
            className="h-auto"
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatarPlaceholderUrl}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <Link key={item.name} href={item.url} className="w-full">
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === item.url && "shad-active"
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                      className={cn(
                        "nav-icon",
                        pathname === item.url && "nav-icon-active"
                      )}
                    />
                    <p className="">{item.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-light-200/20" />
          <FileUploader ownerId={ownerId} accountId={accountId} />
          <Button
            type="submit"
            className="mobile-sign-out-button"
            onClick={async () => await signOutUser()}
          >
            <Image
              src="/icons/logout.svg"
              alt="sign out"
              width={24}
              height={24}
            />
            <p>Logout</p>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
