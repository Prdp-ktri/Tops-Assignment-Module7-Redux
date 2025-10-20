import { useRecoilState } from "recoil";
import { todoListState } from "../state/todoState";

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = todoList.map((t) =>
      t.id === item.id ? { ...t, isComplete: !t.isComplete } : t
    );
    setTodoList(updated);
  };

  const deleteTodo = () => {
    setTodoList(todoList.filter((t) => t.id !== item.id));
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <span
        className={`cursor-pointer ${
          item.isComplete ? "line-through text-gray-400" : ""
        }`}
        onClick={toggleComplete}
      >
        {item.text}
      </span>
      <button className="text-red-500 hover:text-red-700" onClick={deleteTodo}>
        X
      </button>
    </div>
  );
}
