// Ranges
export function rangeColorChanger() {
  const ranges = document.querySelectorAll("input[type='range']");

  ranges.forEach((range) => {
    range.parentElement.style.setProperty("--range", range.value);
    range.addEventListener("input", ({ target }) => {
      target.parentElement.style.setProperty("--range", range.value);
    });
  });
}

// AutoExpand Textareas
export function autoExpandTextarea() {
  document.querySelectorAll("textarea").forEach((el) => {
    el.style.height = el.setAttribute(
      "style",
      "height: " + el.scrollHeight + "px"
    );
    el.classList.add("auto");
    el.addEventListener("input", (e) => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    });
  });
}
