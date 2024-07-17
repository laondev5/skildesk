import React from "react";

const TermsAndCondition = ({ terms }) => {
  if (!terms) return null;

  // assuming terms is an array of objects with a content property
  const content = terms[0]?.content;
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
    </div>
  );
};

export default TermsAndCondition;
