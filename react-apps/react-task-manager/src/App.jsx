import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [items, setItems] = useState([]);

  function addTask(taskData) {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        isCompleted: false,
        ...taskData,
      },
    ]);
  }

  function toggleTask(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  function deleteTask(id){
    const newItems=items.filter((item)=>item.id!==id);
    setItems(newItems);
  }

  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={items} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </>
  );
}

export default App;