<template>
  <div class="inner-form-container">
    <form id="add-task">
      <h1>Add Task</h1>
      <div><input placeholder="Add task name" type="text" /></div>
      <button type="submit">Add</button>
    </form>

    <form id="add-task-duration">
      <h1>Add Task duration</h1>
      <div class="inner-form-container">
        <fieldset>
          <label for="select-task">Which task?</label>
          <select id="select-task" name="select-task"></select>
        </fieldset>
        <fieldset id="date">
          <label for="start-date">Start date:</label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            value="2022-01-01"
            min="2022-01-01"
            max="2050-12-31"
          />

          <label for="end-date">End date:</label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            value="2022-01-03"
            min="2022-01-01"
            max="2050-12-31"
          />
        </fieldset>
      </div>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {},

  methods: {},

  mounted() {},
};
</script>
