let colorSelectors = Array.from(document.querySelectorAll(".color-selector"));
let invoiceTop = document.querySelector(".invoice__top");
let invoiceBottom = document.querySelector(".invoice__bottom");
let invoiceButtons = Array.from(document.querySelectorAll(".invoice-btn"));
let invoiceSendBtn = document.querySelector(".send-invoice-btn");

colorSelectors.forEach((colorSelector) => {
  colorSelector.addEventListener("click", (e) => {
    let currentColor = e.target.getAttribute("data-title").toLowerCase();
    let selectedColor = currentColor;

    invoiceTop.style.background = `var(--${selectedColor})`;
    invoiceSendBtn.style.background = `var(--${selectedColor})`;
    // To retrieve the value of a CSS variable within the window, use getComputedStyle and getPropertyValue
    invoiceBottom.style.background =
      getComputedStyle(document.documentElement).getPropertyValue(
        `--${selectedColor}`
      ) + "50";
    invoiceButtons.forEach((btn) => {
      btn.style.background = `var(--${selectedColor})`;
    });
  });
});
