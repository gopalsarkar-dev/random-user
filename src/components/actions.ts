"use server";

import { revalidateTag } from "next/cache";

export const randomUserActions = async () => {
  revalidateTag("randomUser");
};
