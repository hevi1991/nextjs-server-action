import UserForm from "@/components/UserForm";
import { createUser } from "./actions";
import { db } from "@/utils";
import DeleteButton from "@/components/DeleteButton";

export default async function Home() {
  const users = await db.user.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="flex items-start justify-center min-h-screen gap-20 p-4">
      <table className="border border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-slate-400">EMAIL</th>
            <th className="px-4 py-2 border border-slate-400">NAME</th>
            <th className="px-4 py-2 border border-slate-400">AGE</th>
            <th className="px-4 py-2 border border-slate-400">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="space-x-4">
              <td className="px-4 py-2 border border-slate-400">
                {user.email}
              </td>
              <td className="px-4 py-2 border border-slate-400">{user.name}</td>
              <td className="px-4 py-2 border border-slate-400">{user.age}</td>
              <td className="relative px-4 py-2 border border-slate-400">
                <DeleteButton id={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserForm
        action={createUser}
      />
    </main>
  );
}
