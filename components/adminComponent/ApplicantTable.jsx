"use client";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ApplicantTable = ({ applicant }) => {
  console.log(applicant);
  return (
    <div className="w-full py-8 px-8">
      <h2 className="font-semibold text-2xl">List of all the job Applicants</h2>
      <div>
        <Table>
          <TableCaption>A .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>

              <TableHead>Email</TableHead>
              <TableHead>Linkedin url</TableHead>
              <TableHead>Portfolio url</TableHead>
              <TableHead>Status</TableHead>

              <TableHead className="text-right">
                <DotsHorizontalIcon />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applicant.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.email}</TableCell>

                <TableCell>{invoice.linkedin}</TableCell>
                <TableCell>{invoice.portfolio}</TableCell>

                <TableCell
                  className={
                    invoice.status === "pending"
                      ? "text-red-600"
                      : invoice.status === "Accepted"
                      ? "text-green-600"
                      : "text-red-800"
                  }
                >
                  {invoice.status}
                </TableCell>
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
                            pathname: `/admin/view_applicant/${invoice.id}`,
                          }}
                        >
                          <DropdownMenuItem>View</DropdownMenuItem>
                        </Link>

                        <DropdownMenuItem>
                          <div className="text-red-500 font-semibold">
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

export default ApplicantTable;
