import Task from "../models/Task";

const TaskController = {
  index: async (req, res) => {
    const tasks = await Task.find().lean();
    res.send(tasks);
  },

  show: async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.send(task);
  },


  save: async (req, res) => {
    try {
      const task = Task({
        title: req.body.title.trim(),
        description: req.body.description.trim(),
      });
      const taskSaved = await task.save();
      if (taskSaved) {
        res.send(taskSaved);
      }
    } catch (error) {
      res.send({ error: "Server error at save task" });
    }
  },

  edit: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.send(task);
    } catch (error) {
      res.send({ error: "Server error at save task" });
    }
  },

  update: async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
      });
      res.send(task);
    } catch (error) {
      res.send({ error: "Server error at update task" });
    }
  },

  delete: async (req, res) => {
    try {
      const task = await Task.findByIdAndRemove(req.params.id);
      res.send(task);
    } catch (error) {
      res.send({ error: "Server error at delete task" });
    }
  },

  toggleDone: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      task.done = !task.done;
      await task.save();
      res.send(task);
    } catch (error) {
      res.send({ error: "Server error at set done the task" });
    }
  },
};

export default TaskController;
