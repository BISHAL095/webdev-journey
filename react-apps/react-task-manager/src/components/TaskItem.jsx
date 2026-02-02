export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
    className={`task-item priority-${task.priority.toLowerCase()} ${
        task.isCompleted ? "completed" : ""
    }`}
    >    
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTask(task.id)}
      />

      <span className="task-title">{task.title}</span>

      <span className="priority-badge">
        {task.priority}
      </span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}