import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import Addtodo from "./components/Addtodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <Addtodo />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
