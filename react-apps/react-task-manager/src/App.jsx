import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [items, setItems] = useState([]);

  function addTask(taskData) {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        completed: false,
        ...taskData,
      },
    ]);
  }

  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;