import DisplayUi from "@/components/DisplayUi";
import SkeletonCom from "@/components/SkeletonCom";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => ({
  title: "Random | Random User",
  description: "",
});

const page = () => {
  return (
    <>
      <Suspense fallback={<SkeletonCom />}>
        <DisplayUi />
      </Suspense>
    </>
  );
};

export default page;
