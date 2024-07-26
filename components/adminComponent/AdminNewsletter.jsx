"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const AdminNewsletter = ({ newsletter }) => {
  return (
    <div>
      <div className="mt-[1rem] bg-white overflow-x-scroll">
        <Table>
          <TableCaption>A .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>

              <TableHead className="text-right">
                <DotsHorizontalIcon />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newsletter.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.email}</TableCell>

                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <DotsHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <Link
                          href={{
                            pathname: "/admin/view_user",
                            query: {
                              itemId: invoice.id,
                            },
                          }}
                        >
                          <DropdownMenuItem>View</DropdownMenuItem>
                        </Link>

                        <DropdownMenuItem>
                          <div
                            className="text-red-500 font-semibold"
                            onClick={() => handleIsDelete(invoice.id)}
                          >
                            Delete
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
        </Table>
      </div>
    </div>
  );
};

export default AdminNewsletter;
