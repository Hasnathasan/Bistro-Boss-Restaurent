import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
  const { data: users = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  const handleUserDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
  }

  const handleAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH"
    })
    .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
        })
  }
  console.log(users);
  return (
    <div className="w-[90%] mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-red-500">
                  {user.isAdmin?"admin":<button onClick={ () => handleAdmin(user._id)} className="btn bg-red-500 border-none hover:bg-red-700 btn-circle">
                    <FaUserShield></FaUserShield>
                  </button>}
                </td>
                <td>
                  <button onClick={() => handleUserDelete(user._id)} className="btn bg-red-600 border-none hover:bg-red-700 btn-circle">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
