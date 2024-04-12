import Popover from './popover';
import PopoverSwitch from './popover.switch';

const btn = document.querySelector('.button');
const popover = new Popover(btn);
popover.bindToDOM(document.querySelector('#container'));

const popoverCtrl = new PopoverSwitch(popover);
popoverCtrl.init();
