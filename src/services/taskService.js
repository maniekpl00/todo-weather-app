const TASKS_KEY = 'tasks_key';

export default {
  loadTasks() {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  },

  addTask(task) {
    const tasks = this.loadTasks();
    tasks.push(task);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    return tasks;
  },

  updateTask(task) {
    const tasks = this.loadTasks().map(el => (el.id === task.id ? task : el));
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    return tasks;
  },

  removeTask(taskId) {
    const tasks = this.loadTasks().filter(task => task.id !== taskId);
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    return tasks;
  }
};
