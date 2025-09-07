import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface Task {
  id: number;
  name: string;
  hours: number;
  category: string;
  day: string;
}

export const Dashboard = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [tasksData, setTasksData] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [hoursInput, setHoursInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("Work");
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const categories = ["Work", "Study", "Health", "Leisure"];
  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b"];

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    setTasksData(
      days.map((day) => ({
        day,
        tasks: 0,
        hours: 0,
      }))
    );

    setCategoryData(
      categories.map((cat) => ({
        name: cat,
        value: 0,
      }))
    );
  }, []);

  // ✅ Handle Add/Update Task
  const handleSubmitTask = (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    const newHours = Number(hoursInput);

    if (editTaskId) {
      // Update task
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editTaskId
            ? {
                ...task,
                name: taskInput,
                hours: newHours,
                category: categoryInput,
              }
            : task
        )
      );
      setEditTaskId(null);
    } else {
      // Add task
      const newTask: Task = {
        id: Date.now(),
        name: taskInput,
        hours: newHours,
        category: categoryInput,
        day: today,
      };
      setTasks((prev) => [...prev, newTask]);

      // Update charts
      setTasksData((prev) =>
        prev.map((item) =>
          item.day === today
            ? { ...item, tasks: item.tasks + 1, hours: item.hours + newHours }
            : item
        )
      );

      setCategoryData((prev) =>
        prev.map((cat) =>
          cat.name === categoryInput ? { ...cat, value: cat.value + 1 } : cat
        )
      );
    }

    // Reset form
    setTaskInput("");
    setHoursInput("");
    setCategoryInput("Work");
  };

  // ✅ Handle Delete Task
  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ✅ Handle Edit Task (pre-fill form)
  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setTaskInput(task.name);
    setHoursInput(task.hours.toString());
    setCategoryInput(task.category);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome, {username || "Guest"} 🎉
      </h1>
      <p className="mb-6 text-gray-600">
        Add tasks and track your weekly progress:
      </p>

      {/* ✅ Input Form */}
      <form
        onSubmit={handleSubmitTask}
        className="bg-white shadow-md rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Task name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          required
          className="border p-2 rounded-lg w-full md:w-1/4"
        />
        <input
          type="number"
          placeholder="Hours"
          value={hoursInput}
          onChange={(e) => setHoursInput(e.target.value)}
          required
          min={0}
          className="border p-2 rounded-lg w-full md:w-1/4"
        />
        <select
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-1/4"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* ✅ Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Tasks Completed</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={tasksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 5, fill: "#2563eb" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Hours Spent</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tasksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-xl p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Task Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ✅ Task List */}
      <div className="bg-white shadow-md rounded-xl p-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">Your Task List</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="py-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">{task.name}</p>
                  <p className="text-sm text-gray-500">
                    {task.day} • {task.category}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-blue-600 font-semibold">
                    {task.hours}h
                  </span>
                  <button
                    onClick={() => handleEdit(task)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
