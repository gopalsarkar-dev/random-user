import DisplayUi from "@/components/DisplayUi";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div className="">Loding</div>}>
        <DisplayUi />
      </Suspense>
    </>
  );
};

export default page;
