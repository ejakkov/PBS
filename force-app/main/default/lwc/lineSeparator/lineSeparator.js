import { LightningElement, api } from 'lwc';

export default class LineSeparator extends LightningElement {
    @api lineHeight = 2; // Default line height
    @api separatorColor = '#ef4035'; // Default color
    get separatorStyle() {
        return `height: ${this.lineHeight}px; background-color: ${this.separatorColor};`;
    }
}