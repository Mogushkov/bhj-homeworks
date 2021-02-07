let hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
hasTooltip.forEach(element => {

  element.insertAdjacentHTML("afterend", `<div class="tooltip" style=""> ${element.getAttribute("title")} </div> `);

  element.addEventListener("click", (event) => {
    let tooltips = document.querySelectorAll(".tooltip");
    let hasTooltipXY = event.target.getBoundingClientRect();
    tooltips.forEach(tooltip => {
      if (tooltip != element.nextElementSibling) {
        tooltip.classList.remove("tooltip_active");
      } else {
        element.nextElementSibling.classList.toggle("tooltip_active");
        tooltip.style.position = "absolute";
        tooltip.style.top = hasTooltipXY.bottom + pageYOffset + "px";
        tooltip.style.left = hasTooltipXY.left + "px";
      }
    });
    event.preventDefault();
  });
}); 
