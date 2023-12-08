"use server";

import { InputType, OutputType } from "./types";
import { revalidatePath } from "next/cache";
import { CreateBoard } from "./schema";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { createSafeAction } from "@/lib/create-safe-action";

const handler = async (data: InputType): Promise<OutputType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
