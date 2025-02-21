import DisplayUi from "@/components/DisplayUi";
import SkeletonCom from "@/components/SkeletonCom";
import { Suspense } from "react";

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
