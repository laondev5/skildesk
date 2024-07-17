"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";

const Terms = ({ terms }) => {
  //console.log(terms);
  const content = terms[0]?.content;
  const { data: session } = useSession();
  return (
    <div className="w-full flex flex-col gap-8 justify-center">
      <h1 className="text-2xl text-blue-950 text-center">
        Terms and Conditions
      </h1>
      <div className="w-[95%] flex justify-center overflow-auto border">
        <div
          className="w-[100%] ProseMirror whitespace-pre-line text-gray-900 text-center "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="flex justify-end items-center py-8 pr-20">
        {terms ? (
          <Link
            href={{
              pathname: "/admin/update_terms",
              query: {
                itemId: terms[0].id,
              },
            }}
          >
            <Button variant="outline">Update terms and condition</Button>
          </Link>
        ) : (
          <Link href="/admin/create_terms">
            <Button>Create terms and condition</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Terms;
