"use client";

import { useState } from "react";
import { randomUserActions } from "../actions";
import { Button } from "../ui/button";
import DarkToggle from "./DarkToggle";

const TopBar = () => {
  const [load, setLoad] = useState(false);

  const refBtn = async () => {
    setLoad(true);
    await randomUserActions();
    setLoad(false);
  };

  return (
    <section className="border-b border-foreground/20">
      <div className="container mx-auto grid max-w-screen-lg grid-flow-col place-items-center justify-between p-4 px-6">
        <div className="text-lg font-bold">Random-User</div>
        <div className="grid grid-flow-col justify-between gap-4">
          <DarkToggle />
          <Button onClick={refBtn} variant="outline" disabled={load}>
            Refresh
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
