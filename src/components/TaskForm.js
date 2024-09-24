import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../features/tasks/taskSlice";
import Spinner from "./Spinner";

const TaskForm = () => {
  const [text, setText] = useState(""); // State to manage task input
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.tasks); // Get loading state from Redux

  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(createTask({ text })); // Dispatch createTask with the task text
      setText(""); // Clear input after task creation
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)} // Update input field
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block" disabled={!text.trim()}>
            Add Task
          </button>
        </div>
      </form>

      {isLoading && <Spinner />} {/* Show spinner if tasks are loading */}
    </section>
  );
};

export default TaskForm;
