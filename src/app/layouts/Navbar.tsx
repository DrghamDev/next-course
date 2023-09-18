"use client";
import Link from "next/link";
import "@/app/globals.css"
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { status, data : session } = useSession();

  return (
    <div className="navbar bg-base-100 p-2">
      <Link href="/" className="text-2xl">
        <span className="p-5 text-2xl hover:text-cyan-500 transition-colors">Home</span>
      </Link>
      <Link href="/users" className="text-2xl">
        <span className="text-2xl p-5 hover:text-cyan-500">Users</span>
      </Link>
      {
      status === "unauthenticated" ?
      <Link href="/api/auth/signin" className="text-2xl">
        <span className="text-2xl p-5 hover:text-cyan-500">Sign in</span>
      </Link> : null
      }
      {
      status === "authenticated" ?
      <div className="text-2xl">
        {session.user!.name}
      </div> : null
      }
      {
      status === "authenticated" ?
      <Link href="/api/auth/signout" className="text-2xl">
        <span className="text-2xl p-5 hover:text-cyan-500">Sign Out</span>
      </Link> : null
      }
    </div>
  )
}

export default Navbar