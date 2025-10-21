import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";
import { useState } from "react";
import EditUser from "./EditUser";

export default function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editUserId, setEditUserId] = useState(null);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">User List</h2>
      {users.length === 0 && (
        <p className="text-gray-500">No users added yet.</p>
      )}

      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center border-b py-2"
        >
          {editUserId === user.id ? (
            <EditUser user={user} setEditUserId={setEditUserId} />
          ) : (
            <>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => setEditUserId(user.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
