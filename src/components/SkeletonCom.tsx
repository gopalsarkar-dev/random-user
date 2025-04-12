import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCom = () => {
  return (
    <div className="grid h-[90dvh] place-items-center">
      <Card className="mx-auto w-[320px] shadow-lg sm:max-w-sm">
        <CardHeader className="grid place-items-center">
          <Skeleton className="h-[120px] w-[120px] rounded-full" />
        </CardHeader>
        <CardContent className="mx-auto flex flex-col items-center justify-center gap-2">
          <CardTitle className="text-2xl">
            <Skeleton className="h-6 w-[200px]" />
          </CardTitle>
          <Skeleton className="h-4 w-[260px]" />
        </CardContent>
        <hr />
        <CardFooter className="grid grid-flow-col gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-lg font-bold">Gender</div>
            <Skeleton className="h-5 w-[40px]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-lg font-bold">Age</div>
            <Skeleton className="h-6 w-[40px]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-lg font-bold">Country</div>
            <Skeleton className="h-5 w-[50px]" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCom;
