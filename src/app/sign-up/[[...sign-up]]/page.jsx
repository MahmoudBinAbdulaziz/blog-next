import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center p-3">
      <SignUp />
    </div>
  );
}

export default page;
