(function () {
  const scroller = document.getElementById("scroller");
  const fill = document.getElementById("progressFill");
  const meta = document.getElementById("metaPercent");

  function updateProgress() {
    const scrollTop = scroller.scrollTop;
    const scrollHeight = scroller.scrollHeight;
    const clientHeight = scroller.clientHeight;
    const maxScroll = Math.max(1, scrollHeight - clientHeight);
    const pct = Math.min(100, Math.round((scrollTop / maxScroll) * 100));

    fill.style.width = pct + "%";
    fill.textContent = pct + "%";
    fill.setAttribute("aria-valuenow", pct);
    meta.textContent = pct + "%";
  }

  scroller.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  scroller.addEventListener("keydown", function (e) {
    if (
      [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End",
        " ",
      ].includes(e.key)
    ) {
      requestAnimationFrame(updateProgress);
    }
  });
})();
