"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/error");
    else {
      router.push("/");
    }
  }, [user]);

  return (
    <h1 className="flex justify-center my-4">
      Only logged in users can view this page
    </h1>
  );
}

export default Page;
