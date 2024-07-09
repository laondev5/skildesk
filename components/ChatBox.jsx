"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircleMore } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Send } from "lucide-react";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[4rem] h-[4rem] rounded-full bg-blue-950 text-white"
        >
          <MessageCircleMore />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {isOpen ? (
          <div className="w-full">
            <div className="w-full px-3 py-2 bg-blue-950 flex justify-end items-center">
              <Button size="icon" variant="ghost" className="text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <DotsHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>View</DropdownMenuItem>

                    <DropdownMenuItem>View</DropdownMenuItem>

                    <DropdownMenuItem>Edit</DropdownMenuItem>

                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Button>
            </div>
            <div className="w-full h-[30rem] bg-gray-50 overflow-auto relative">
              {chat ? (
                <div className="w-[70%] py-2 px-3 rounded-md text-white bg-blue-950">
                  {chat}
                </div>
              ) : (
                <div className="hidden"></div>
              )}
              <div className="fixed bottom-0 left-0 w-full h-[4rem] bg-white shadow-sm z-10 flex gap-1 px-3 py-2">
                <Input
                  placeholder="type here..."
                  name="chat"
                  onChange={(e) => setChat(e.target.value)}
                />
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => setMessage(chat)}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-4 justify-center">
            <div className="w-[80%]">
              <Image
                src="/message.svg"
                alt="message"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <h2 className="text-xl font-bold text-center text-blue-950">
              Start a conversation with a professional
            </h2>
            <p className="text-md text-center text-gray-500">
              You can search for professionals by skill, location, or industry.
            </p>
            <Button variant="default" onClick={() => setIsOpen(true)}>
              Start a conversation
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
