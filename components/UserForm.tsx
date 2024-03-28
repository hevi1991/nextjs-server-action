"use client";

import { faker } from "@faker-js/faker";
import { useRouter } from "next/navigation";

export default function UserForm({
  action,
}: {
  action: (formData: FormData) => any;
}) {
  const isMale = faker.person.sexType() === "male";
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        await action(formData);
        router.refresh();
      }}
      className="flex flex-col gap-4 p-8 bg-blue-200 border-2"
    >
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        required
        defaultValue={faker.internet.email()}
      />
      <input
        type="text"
        name="name"
        placeholder="NAME"
        required
        defaultValue={faker.person.fullName()}
      />
      <input
        type="number"
        name="age"
        placeholder="AGE"
        required
        defaultValue={faker.number.int({ max: 100, min: 1 })}
      />
      <div className="flex justify-center gap-2">
        <input type="radio" name="sex" value="1" defaultChecked={isMale} />
        <label htmlFor="sex">MALE</label>
        <input type="radio" name="sex" value="0" defaultChecked={!isMale} />
        <label htmlFor="sex">FAMALE</label>
      </div>
      <input type="submit" className="mt-8 bg-blue-500 text-blue-50" />
    </form>
  );
}
