import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from 'next/navigation'

type User = {
  name : string;
  username : string;
  email : string;
  address : {
    street : string;
    suite : string;
    city : string;
    zipcode : string;
    geo : {
      lat : string;
      lng : string;
    }
  },
  phone : string;
  website : string;
  company : {
    name : string;
    catchPhrase : string;
    bs : string;
  }
}

interface Props {
  params : {
    id : number;
  }
}

const UserProfilePage = async ({
  params : { id }
} : Props) => {
  if (id > 10) return notFound();

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await response.json();

  return (
    <div>
      <h1 className="text-3xl my-3">{user.name}</h1>
      <h3 className="text-lg my-3">{user.email}</h3>
      <p className="text-base my-3">{user.phone}</p>
      <p className="text-base my-3">{user.address.city} - {user.address.street}</p>
    </div>
  )
}

export default UserProfilePage
