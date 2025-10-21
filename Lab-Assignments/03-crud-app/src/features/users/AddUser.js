import React, { useState } from "react";
import { addUser } from "./userSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    dispatch(addUser({ id: uuidv4(), name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 border rounded mb-4"
      >
        <h2 className="text-xl font-semibold mb-2">Add User:</h2>
        <input
          type="text"
          className="border px-2 py-1 rounded"
          placeholder="Enter Name"
          value={name}
          name=""
          onChange={(e) => {
            setName(e.target.value);
          }}
          id=""
        />
        <input
          type="email"
          className="border px-2 py-1 rounded"
          placeholder="Enter Email"
          value={email}
          name=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id=""
        />
        <button className="border px-2 py-1 rounded" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
