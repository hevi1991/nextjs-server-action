"use client";

import { deleteUserById } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleClick = async () => {
    await deleteUserById(id);
    router.refresh();
  };
  return (
    <button
      className="absolute inset-0 font-bold text-center text-red-500 cursor-pointer"
      onClick={handleClick}
    >
      X
    </button>
  );
}
