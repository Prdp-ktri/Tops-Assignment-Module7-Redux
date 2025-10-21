import AddUser from "./features/users/AddUser";
import UserList from "./features/users/UserList";

export default function App() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">👥 Redux CRUD App</h1>
      <AddUser />
      <UserList />
    </div>
  );
}
