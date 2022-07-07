<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import GanttChart from "./components/GanttChart.vue";
import AddTask from "./components/AddTask.vue";
import TrackerPeriod from "./components/TrackerPeriod.vue";
</script>

<template>
  <div>
    <GanttChart v-bind="{ tasks, taskDurations, period }" />

    <div id="add-forms-container">
      <AddTask />
      <TrackerPeriod @update-period="updatePeriod" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      period: {
        fromSelectYear: 2022,
        fromSelectMonth: 0,
        toSelectYear: 2022,
        toSelectMonth: 0,
      },
      tasks: [
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" },
        { id: 4, name: "Task 4" },
        { id: 5, name: "Task 5" },
        { id: 6, name: "Task 6" },
        { id: 7, name: "Task 7" },
        { id: 8, name: "Task 8" },
        { id: 28, name: "Task 28" },
      ],
      taskDurations: [
        {
          id: "1",
          start: new Date("2022/1/2"),
          end: new Date("2022/1/8"),
          task: 1,
        },
        {
          id: "2",
          start: new Date("2022/1/10"),
          end: new Date("2022/1/15"),
          task: 2,
        },
        {
          id: "3",
          start: new Date("2022/1/11"),
          end: new Date("2022/1/18"),
          task: 4,
        },
        {
          id: "4",
          start: new Date("2022/1/20"),
          end: new Date("2022/1/30"),
          task: 4,
        },
        {
          id: "5",
          start: new Date("2022/1/20"),
          end: new Date("2022/1/21"),
          task: 28,
        },
      ],
    };
  },

  methods: {
    updatePeriod(period) {
      this.period = { ...period };
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
