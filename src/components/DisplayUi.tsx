import { UserApiType } from "@/lib/type";
import ky from "ky";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const DisplayUi = async () => {
  const req = await ky
    .get("https://randomuser.me/api/?nat=IN", {
      cache: "no-cache",
      next: { tags: ["randomUser"] },
    })
    .json<any>(); // eslint-disable-line

  const res = (await req.results[0]) as UserApiType;

  return (
    <>
      <div className="grid h-[85dvh] place-items-center">
        <Card className="shadow-lg sm:max-w-sm">
          <CardHeader className="grid place-items-center">
            <Image
              src={res.picture.large}
              alt={res.picture.large}
              height={120}
              width={120}
              className="rounded-full border border-foreground/35"
            />
          </CardHeader>
          <CardContent className="mx-auto flex flex-col items-center justify-center">
            <CardTitle className="text-2xl">
              {res.name.title} {res.name.first} {res.name.last}
            </CardTitle>
            <CardTitle className="text-xl">{res.email}</CardTitle>
          </CardContent>
          <hr />
          <CardFooter className="grid grid-flow-col gap-5">
            <div className="flex flex-col text-center">
              <div className="text-lg font-bold">Gender</div>
              <div className="font-bold">{res.gender}</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-lg font-bold">Age</div>
              <div className="font-bold">{res.dob.age}</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-lg font-bold">Country</div>
              <div className="font-bold">{res.location.country}</div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DisplayUi;
