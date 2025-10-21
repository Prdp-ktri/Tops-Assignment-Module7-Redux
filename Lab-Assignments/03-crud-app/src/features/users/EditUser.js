import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";

export default function EditUser({ user, setEditUserId }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, name, email }));
    setEditUserId(null);
  };

  return (
    <form onSubmit={handleUpdate} className="flex gap-2 w-full">
      <input
        className="border px-2 py-1 rounded w-1/3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border px-2 py-1 rounded w-1/3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        type="submit"
      >
        Save
      </button>
      <button
        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
        onClick={() => setEditUserId(null)}
      >
        Cancel
      </button>
    </form>
  );
}
