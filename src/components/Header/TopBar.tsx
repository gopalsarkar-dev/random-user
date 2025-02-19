import { Button } from "../ui/button";
import DarkToggle from "./DarkToggle";

const TopBar = () => {
  return (
    <>
      <section className="border-b border-foreground/20">
        <div className="container mx-auto grid max-w-screen-lg grid-flow-col place-items-center justify-between p-4 px-6">
          <div className="">Random-User</div>
          <div className="grid grid-flow-col justify-between gap-4">
            <DarkToggle />
            <Button variant={"outline"}>Refress</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
