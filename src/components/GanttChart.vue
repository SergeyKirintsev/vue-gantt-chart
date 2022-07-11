<template>
  <div role="gantt-chart" @click="onChart"></div>
</template>

<script>
import { GanttChart } from '../utils/ganttChart/ganttChart';

export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    taskDurations: {
      type: Array,
      required: true,
    },
    period: {
      type: Object,
      required: true,
    },
  },

  methods: {
    createChart() {
      const ganttCharts = document.querySelectorAll('[role=gantt-chart]');

      ganttCharts.forEach((gantChart) => (gantChart.innerHTML = ''));

      ganttCharts.forEach((gantChart) => {
        new GanttChart(gantChart, this.tasks, this.taskDurations, this.period);
      });
    },

    onChart(e) {
      const el = e.target;
      if (el.classList.contains('taskDuration')) {
        const row = el.closest('.gantt-time-period');
        const tasks = row.querySelectorAll('.taskDuration');
        for (const task of tasks) {
          task.style.zIndex = 1;
        }
        el.style.zIndex = 2;

        this.$emit('select-task-duration', el.id);
        return;
      }
      this.$emit('select-task-duration', null);
    },
  },

  mounted() {
    this.createChart();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 1.5rem;
}

fieldset {
  border: none;
  padding: 0.5rem;
}

fieldset label {
  margin-right: 10px;
}

#date > label:nth-child(3) {
  margin-left: 10px;
}

form button {
  width: 70px;
  height: 50px;
}

select {
  font-size: 1.2rem;
  padding: 0.2rem 0.2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
}

input {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  padding: 10px 5px;
  border: 1px solid #ededed;
  border-radius: 5px;
  transition: 0.2s ease-out;
}

input:focus {
  outline-color: #0095e4;
}

button:hover {
  cursor: pointer;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

#gantt-container {
  padding: 1rem;
}

#gantt-grid-container {
  display: grid;
  grid-template-columns: 150px 1fr;
  outline: 2px solid #e9eaeb;
}

#gantt-grid-container,
#settings > fieldset,
#add-task,
#add-task-duration {
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
}

#gantt-grid-container__time {
  display: grid;
  overflow-x: auto;
}

.gantt-task-row {
  outline: 0.5px solid #e9eaeb;
  text-align: center;
  height: 40px;
  /* expand across whole grid */
  grid-column: 1/-1;
  width: 100%;
  border: none;
}

.gantt-task-row button {
  border: none;
  height: 40px;
}

.gantt-task-row input {
  width: 127px;
  border: none;
  outline: none;
  background: none;
}

#gantt-grid-container__tasks button {
  color: #ef5350;
  background: none;
  border-radius: 5px;
  height: 20px;
  transition: all 0.2s ease;
}

#gantt-grid-container__tasks button:focus {
  outline: none;
  transform: scale(1.3);
}

#gantt-grid-container__tasks .gantt-task-row {
  padding: 2px 0;
}

.gantt-time-period {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(30px, 1fr);
  text-align: center;
  height: 40px;
}

.gantt-time-period span {
  margin: auto;
}

.gantt-time-period-cell-container {
  grid-column: 1/-1;
  display: grid;
}

.gantt-time-period-cell {
  position: relative;
  outline: 0.5px solid #e9eaeb;
}

.day {
  color: #bbb;
}

#settings {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 0.5rem;
}

.taskDuration {
  position: absolute;
  height: 40px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(158, 221, 255, 1) 0%, rgba(0, 149, 228, 1) 100%);
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  cursor: move;

  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.taskDuration:focus {
  outline: 1px solid black;
}

.dragging {
  opacity: 0.5;
}

#add-forms-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  justify-content: space-between;
}

#add-forms-container form {
  padding: 1rem;
}

#add-forms-container form > * {
  display: flex;
  align-items: center;
}

#add-forms-container input {
  height: 40px;
}

#add-task,
#add-task-duration {
  margin-right: 10px;
  margin-bottom: 10px;
}

#add-forms-container button:hover,
#add-forms-container button:focus {
  opacity: 0.85;
}

input[type='text'],
select {
  padding: 5px 7px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
}

#add-forms-container button {
  color: white;
  background: #2ade3c;
  font-size: 1.1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
}

.tracker-period {
  padding: 1rem;
}

.tracker-period h1 {
  margin-bottom: 16px;
}

.inner-form-container {
  display: flex;
  flex-direction: row;
}

.inner-form-container h1 {
  margin-bottom: 0.5rem;
}

.current-day {
  background-color: aquamarine;
  position: relative;
}

.current-day::before {
  content: '';
  position: absolute;
  right: 14px;
  height: 240px;
  border-right: 1px solid red;
  top: 80px;
  z-index: 10;
}

.taskDuration__icons {
  display: flex;
  pointer-events: none;
}

.taskDuration__span {
  font-size: 14px;
  line-height: 1;
  pointer-events: none;
}

.taskDuration__done {
  pointer-events: none;
}
</style>
