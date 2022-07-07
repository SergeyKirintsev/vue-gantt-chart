export function createHtmlContentFragment() {
  const content = `
  <div id="gantt-container">

      <div class="title">
        <h1> Gantt Tracker</h1>
      </div>

      <div id="gantt-grid-container">
        <div id="gantt-grid-container__tasks"></div>
        <div id="gantt-grid-container__time"></div>
      </div>

  </div>
  `;

  // turn the HTML string into a document fragment
  const contentFragment = document
    .createRange()
    .createContextualFragment(content);
  return contentFragment;
}
