import { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

type Props = {
  searchParams : { 
    sortOrder : string 
  }
}

const UsersPage = async ({ searchParams : { sortOrder } } : Props) => {

  return (
    <>
      <h1 className="text-3xl bg-inherit p-5 my-5">Users</h1>
      <Link href="/users/new" className="btn mx-3 mb-5">Add User</Link>
      <Suspense fallback={<p>Loadding...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage