export default class Popover {
  constructor(btn) {
    this.container = null;
    this.btn = btn;
  }

  bindToDOM(container) {
    this.container = container;
  }

  showPopover() {
    const popoverEl = document.createElement('div');
    popoverEl.classList.add('popover');
    popoverEl.innerHTML = `
      <h4 class="popover-header">Тут будет название</h4>
      <p class="popover-body">Тут будет пояснение к кнопке<br> (Но это не точно:))</p>
      <div class="popover-tip"></div>
      `;
    this.container.prepend(popoverEl);
    popoverEl.style.top = `${this.btn.offsetTop - popoverEl.offsetHeight}px`;
    popoverEl.style.left = `${this.btn.offsetLeft + this.btn.offsetWidth / 2 - popoverEl.offsetWidth / 2}px`;
  }

  clearPopover() {
    const popoverEl = this.container.querySelector('.popover');
    if (popoverEl) {
      popoverEl.remove();
    }
  }
}
