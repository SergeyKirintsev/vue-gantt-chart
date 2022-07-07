<template>
  <div class="inner-form-container">
    <form id="add-task">
      <h1>Add Task</h1>
      <div><input v-model="newTask" placeholder="Add task name" type="text" /></div>
      <button type="submit" @click.prevent="addTask()">Add</button>
    </form>

    <form id="add-task-duration">
      <h1>Add Task duration</h1>
      <div class="inner-form-container">
        <fieldset>
          <label for="select-task">Which task?</label>
          <!-- <select id="select-task" name="select-task"></select> -->
          <select v-model="selectedTask">
            <option v-for="task in tasks" v-bind:value="task">
              {{ task.name }}
            </option>
          </select>
        </fieldset>
        <fieldset id="date">
          <label for="start-date">Start date:</label>
          <input
            v-model="start"
            type="date"
            id="start-date"
            name="start-date"
            min="2022-01-01"
            max="2050-12-31"
          />

          <label for="end-date">End date:</label>
          <input
            v-model="end"
            type="date"
            id="end-date"
            name="end-date"
            min="2022-01-01"
            max="2050-12-31"
          />
        </fieldset>
      </div>
      <button @click.prevent="addTaskDuration()">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      newTask: '',
      selectedTask: '',
      start: '2022-01-01',
      end: '2022-01-05',
    };
  },

  methods: {
    addTask() {
      this.$emit('add-task', this.newTask);
    },

    addTaskDuration() {
      const taskDuration = {
        start: this.start,
        end: this.end,
        task: this.selectedTask.id,
      };
      this.$emit('add-task-duration', taskDuration);
    },
  },

  mounted() {},
};
</script>
