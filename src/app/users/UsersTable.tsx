import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id : number;
  name : string;
  username : string;
  email : string;
  phone : string;
}

type Props = {
  sortOrder : "email" | "name" | "id" | string;
}

const UsersTable = async ({
  sortOrder,
} : Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users : User[] = await response.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? 
    user => user.email : 
    sortOrder === "id" ? 
    user => user.id :
    user => user.name
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link href={"http://localhost:3000/users?sortOrder=id"}>ID</Link>
          </th>
          <th>
            <Link href={"http://localhost:3000/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"http://localhost:3000/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              <Link href={`/users/${item.id}`} className="text-cyan-600 hover:text-cyan-400">{item.name}</Link>
            </td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable