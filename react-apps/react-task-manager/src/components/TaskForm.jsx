// import { useState } from "react";

// export default function TaskForm({items,addTask}){
//     const [tasks,setTasks] =useState(items);
//     const [taskTitle,setTaskTitle]=useState("");

//     function handleTitle(e){
//         setTaskTitle(e.target.value);
//         setTasks({...tasks,taskTitle});

//     }
//     return(
//         <div className="task-form">
//             <input 
//                 name="title"
//                 placeholder="Add Task Heading"
//                 value={taskTitle}
//                 onChange={(e)=> handleTitle(e)}
//             /> 
//             <button onClick={addTask}>Save</button> 
//         </div>
        
//     )
// }  
import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      title,
      priority,
      createdAt: Date.now(),
    });

    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Add Task Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        </select>
      <button type="submit">Save</button>
    </form>
  );
}