// import { getUsers } from '@/lib/db';
// import { UsersTable } from './users-table';

import Dashboard from "@/components/ui/Dashboard";

export default async function IndexPage() {
  // const { users, newOffset } = await getUsers(search, Number(offset));

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <Dashboard/>
      </div>
      <div className="w-full mb-4">
        {/* <Search value={searchParams.q} /> */}
      </div>
      {/* <UsersTable users={users} offset={newOffset} /> */}
    </main>
  );
}
