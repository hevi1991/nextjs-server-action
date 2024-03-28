"use server";

import { db } from "@/utils";

export async function createUser(formData: FormData) {
  const rawForm = Object.fromEntries(formData);
  return await db.user.create({
    data: {
      name: rawForm.name.toString(),
      email: rawForm.email.toString(),
      age: JSON.parse(rawForm.age.toString()),
      sex: JSON.parse(rawForm.sex.toString()),
    },
  });
}

export async function deleteUserById(id: string) {
  return await db.user.delete({ where: { id } });
}
