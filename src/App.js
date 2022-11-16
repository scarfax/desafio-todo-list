import './global.css';
import './styles.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleCreateTask() {
    if (task === '') {
      alert('Digite alguma tarefa');
    } else {
      const idRandom = (num) => Math.floor(Math.random() * num);
      const newTask = { id: idRandom(102343), title: task, isComplete: false };

      setTasks([...tasks, newTask]);
      setTask('');
    }
  }

  function handleToggleTaskCompletion(id) {
    const taskComplete = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }

      return task;
    });

    setTasks(taskComplete);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((remove) => remove.id !== id));
  }

  return (
    <div className="app">
      <div className="todo">
        <h1>Lista de tarefas</h1>
        <header>
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button onClick={handleCreateTask}>Adicionar</button>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={
                task.isComplete ? 'task-container completed' : 'task-container'
              }
            >
              <div className="check-and-title">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <div>
                <button
                  className="button-delete"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Apagar
                </button>
              </div>
            </div>
          ))}
        </header>
      </div>
    </div>
  );
}

export default App;
