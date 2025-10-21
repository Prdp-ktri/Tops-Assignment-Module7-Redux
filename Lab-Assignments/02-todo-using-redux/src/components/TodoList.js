import { useRecoilValue } from "recoil";
import { todoListState, todoListStats } from "../state/todoState";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);
  const { total, completed } = useRecoilValue(todoListStats);

  return (
    <div>
      <p className="text-gray-600 mb-2">
        Total: {total} | Completed: {completed}
      </p>
      {todoList.length === 0 ? (
        <p className="text-gray-400">No tasks yet. Add one!</p>
      ) : (
        todoList.map((item) => <TodoItem key={item.id} item={item} />)
      )}
    </div>
  );
}
