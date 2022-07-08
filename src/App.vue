<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import GanttChart from './components/GanttChart.vue';
import AddTask from './components/AddTask.vue';
import TrackerPeriod from './components/TrackerPeriod.vue';
</script>

<template>
  <div>
    <GanttChart
      v-bind="{ tasks, taskDurations, period }"
      :key="componentKey"
      @select-task-duration="selectTaskDuration"
    />

    <div id="add-forms-container">
      <AddTask v-bind="{ tasks }" @add-task-duration="addTaskDuration" @add-task="addTask" />
      <TrackerPeriod @update-period="updatePeriod" />
    </div>

    <p>Task duration id: {{ selectedTaskDurationId ? selectedTaskDurationId : 'select' }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentKey: 0,
      selectedTaskDurationId: null,

      period: {
        fromSelectYear: 2022,
        fromSelectMonth: 0,
        toSelectYear: 2022,
        toSelectMonth: 0,
      },
      tasks: [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
        { id: 4, name: 'Task 4' },
        { id: 8, name: 'Task 8' },
        { id: 28, name: 'Task 28' },
      ],
      taskDurations: [
        {
          id: '1',
          start: new Date('2022/1/2'),
          end: new Date('2022/1/8'),
          task: 1,
          name: 'Заправка\nСледом тягач',
          backgroundColor: 'red',
          height: 23,
          progress: '12/99',
          iconsLeft: [],
          iconsRight: [],
        },
        {
          id: '11',
          start: new Date('2022/1/1'),
          end: new Date('2022/1/5'),
          task: 1,
          name: 'Text',
          backgroundColor: '#65e6bf',
          height: 20,
          progress: '30/56',
          top: 15,
        },
        {
          id: '12',
          start: new Date('2022/1/5'),
          end: new Date('2022/1/7'),
          task: 1,
          name: 'Text',
          backgroundColor: 'yellow',
          height: 25,
          progress: '5/6',
          top: 10,
        },
        {
          id: '2',
          start: new Date('2022/1/10'),
          end: new Date('2022/1/15'),
          task: 2,
          name: 'мойка',
          backgroundColor: '#e66465',
          height: 30,
        },
        {
          id: '3',
          start: new Date('2022/1/11'),
          end: new Date('2022/1/18'),
          task: 4,
        },
        {
          id: '4',
          start: new Date('2022/1/20'),
          end: new Date('2022/1/30'),
          task: 4,
        },
        {
          id: '28',
          start: new Date('2022/1/13'),
          end: new Date('2022/1/21'),
          task: 28,
          iconsLeft: [],
          iconsRight: [],
        },
      ],
    };
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },

    updatePeriod(period) {
      this.period = { ...period };
      this.forceRerender();
    },

    addTask(name) {
      const newTask = {
        id: Date.now(),
        name,
      };
      this.tasks.push(newTask);
      this.forceRerender();
    },

    addTaskDuration(taskDuration) {
      const start = new Date(taskDuration.start);
      const end = new Date(taskDuration.end);
      const task = taskDuration.task;
      const backgroundColor = taskDuration.color;
      const height = taskDuration.height;
      const top = taskDuration.top;

      const newTaskDuration = {
        id: Date.now(),
        start,
        end,
        task,
        backgroundColor,
        height,
        top,
      };

      this.taskDurations.push(newTaskDuration);
      this.forceRerender();
    },

    selectTaskDuration(id) {
      this.selectedTaskDurationId = id;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
