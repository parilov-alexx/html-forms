export default class PopoverSwitch {
  constructor(popover) {
    this.popover = popover;
  }

  init() {
    this.popover.btn.addEventListener('click', () => {
      if (!this.popover.container.querySelector('.popover')) {
        this.popover.showPopover();
      } else {
        this.popover.clearPopover();
      }
    });
  }
}
