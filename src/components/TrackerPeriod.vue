<template>
  <div class="tracker-period">
    <h1>Tracker Period</h1>
    <div>
      <div id="settings">
        <fieldset id="select-from">
          <legend>From</legend>
          <select
            v-model="fromSelectMonth"
            id="from-select-month"
            name="from-select-month"
          ></select>
          <select
            v-model="fromSelectYear"
            id="from-select-year"
            name="from-select-year"
          ></select>
        </fieldset>

        <fieldset id="select-to">
          <legend>To</legend>
          <select
            v-model="toSelectMonth"
            id="to-select-month"
            name="to-select-month"
          ></select>
          <select
            v-model="toSelectYear"
            id="to-select-year"
            name="to-select-year"
          ></select>
        </fieldset>
      </div>

      <button @click="updatePeriod()">Update period</button>
    </div>
  </div>
</template>

<script>
// add date selector values
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let monthOptionsHTMLStrArr = [];
for (let i = 0; i < months.length; i++) {
  monthOptionsHTMLStrArr.push(`<option value="${i}">${months[i]}</option>`);
}

const years = [];
for (let i = 2022; i <= 2030; i++) {
  years.push(`<option value="${i}">${i}</option>`);
}

export default {
  data: () => ({
    fromSelectYear: "2022",
    fromSelectMonth: "0",
    toSelectYear: "2022",
    toSelectMonth: "0",
  }),

  methods: {
    updatePeriod() {
      const period = {
        fromSelectYear: this.fromSelectYear,
        fromSelectMonth: this.fromSelectMonth,
        toSelectYear: this.toSelectYear,
        toSelectMonth: this.toSelectMonth,
      };
      this.$emit("update-period", period);
    },
  },

  mounted() {
    const fromSelectYear = document.querySelector("#from-select-year");
    const fromSelectMonth = document.querySelector("#from-select-month");
    const toSelectYear = document.querySelector("#to-select-year");
    const toSelectMonth = document.querySelector("#to-select-month");

    fromSelectMonth.innerHTML = `
      ${monthOptionsHTMLStrArr.join("")}
    `;
    fromSelectYear.innerHTML = `
      ${years.join("")}
    `;
    toSelectMonth.innerHTML = `
      ${monthOptionsHTMLStrArr.join("")}
    `;
    toSelectYear.innerHTML = `
      ${years.join("")}
    `;
  },
};
</script>
