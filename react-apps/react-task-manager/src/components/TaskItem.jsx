export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTask(task.id)}
      />

      <span
        style={{
          flex: 1,
          textDecoration: task.isCompleted ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}