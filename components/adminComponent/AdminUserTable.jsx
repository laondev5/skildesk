"use client";
import React, { useEffect, useState, useCallback } from "react";
import Empty from "../Empty";
import { useSession } from "next-auth/react";
import { getJobs } from "@/app/action/getJobs";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { deleteJob } from "@/app/action/deleteJob";
import { Toaster, toast } from "sonner";
import { deleteUser } from "@/app/action/deleteUser";
//import getSymbolFromCurrency from "currency-symbol-map";
import CurrencySymbol from "@/lib/CurrencySymbol";
const AdminUserTable = ({ users }) => {
  //console.log(users);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  const handleIsDelete = (id) => {
    setDeleteData(id);
    setIsDelete(true);
  };

  //const usdSymbol = getSymbolFromCurrency("USD");
  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);

      if (res) {
        setIsDelete(false);
        toast.success("user deleted successful");
      }
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  // const amount = parseFloat(row.getValue("pay"));

  // // Format the amount as a dollar amount
  // const formatted = new Intl.NumberFormat("en-NG", {
  //   style: "currency",
  //   currency: "NGN",
  // }).format(amount);

  const handleEdit = (id) => {
    console.log(id);
    router.push(`/edit/${id}`);
    // const jobId = {
    //   itemId: id,
    // };
    // router.push({
    //   pathname: "/edit",
    //   query: jobId,
    // });
  };
  //console.log(data);
  return (
    <div className="w-[100%] relative">
      <Toaster position="bottom-right" expand={false} richColors />
      {users.length === 0 ? (
        <Empty />
      ) : (
        <div className="mt-[1rem] mb-[5rem]">
          <div className="font-bold text-md text-blue-950">User</div>
          <div className="mt-[1rem] bg-white overflow-x-scroll">
            <Table>
              <TableCaption>A .</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Brand Name</TableHead>
                  <TableHead>Website</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead className="text-right">
                    <DotsHorizontalIcon />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.name}
                    </TableCell>
                    <TableCell>{invoice.email}</TableCell>
                    <TableCell>
                      {invoice.role === "ADMIN"
                        ? "Admin"
                        : invoice.role === "VENDOR"
                        ? "Brand"
                        : "User"}
                    </TableCell>
                    <TableCell>{invoice.industry}</TableCell>
                    <TableCell>{invoice.brandName}</TableCell>
                    {invoice.role === "VENDOR" ? (
                      <TableCell>
                        <Link href={invoice.website}>{invoice.website}</Link>
                      </TableCell>
                    ) : (
                      "NULL"
                    )}
                    <TableCell>
                      {invoice.role === "ADMIN" ? (
                        <div className="py-1 px-3 rounded-sm text-green-600  font-semibold">
                          ADMIN
                        </div>
                      ) : invoice.role === "USER" ? (
                        <div className="py-1 px-3 rounded-sm text-green-600  font-semibold">
                          Job Applicant
                        </div>
                      ) : (
                        <div className="py-1 px-3 rounded-sm   font-semibold">
                          {invoice.adminVerified === false ? (
                            <p className="font-semibold text-red-500">
                              Not Verified
                            </p>
                          ) : (
                            <p className="font-semibold text-green-500">
                              Verified
                            </p>
                          )}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>{invoice.phoneNumber}</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <DotsHorizontalIcon />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Action</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {invoice.role === "ADMIN" ? (
                              <div className="hidden"></div>
                            ) : invoice.role === "USER" ? (
                              <div className="hidden"></div>
                            ) : (
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
                            )}

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
      )}

      {/* //alert */}

      {isDelete && (
        // <AlertDialog>
        //   <AlertDialogTrigger>
        //     <span className="text-red-500">Delete</span>
        //   </AlertDialogTrigger>
        //   <AlertDialogContent>
        //     <AlertDialogHeader>
        //       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        //       <AlertDialogDescription>
        //         This action cannot be undone. This will permanently delete this
        //         job and remove your data from our servers.
        //       </AlertDialogDescription>
        //     </AlertDialogHeader>
        //     <AlertDialogFooter>
        //       <AlertDialogCancel>Cancel</AlertDialogCancel>
        //       <AlertDialogAction>Continue</AlertDialogAction>
        //     </AlertDialogFooter>
        //   </AlertDialogContent>
        // </AlertDialog>
        <div className="absolute left-0 top-0 w-full h-screen bg-gray-300/5">
          <div className="w-full h-full flex justify-center ">
            <div className="flex flex-col justify-center items-center w-[40rem] h-[17rem] bg-white  rounded-md shadow-md px-4">
              <div className="w-fill my-2 flex flex-col justify-center">
                <h2 className="text-red-500 my-1 font-bold text-center text-2xl">
                  Are you absolutely sure?
                </h2>
                <p className="text-center">
                  This action cannot be undone. This will permanently delete
                  this user and remove your data from our servers.
                </p>
              </div>
              <div className="w-[14rem] flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDelete(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="delete"
                  size="sm"
                  onClick={handleDelete(deleteData)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserTable;
