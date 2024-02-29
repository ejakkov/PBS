import { LightningElement } from 'lwc';

export default class ToolTip extends LightningElement {
    handleMouseEnter() {
        this.template.querySelector('.tooltip').classList.add('show');
    }

    handleMouseLeave() {
        this.template.querySelector('.tooltip').classList.remove('show');
    }
}