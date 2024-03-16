import { LightningElement, api } from 'lwc';

export default class LineSeparator extends LightningElement {
    @api lineHeight = 2;
    @api separatorColor = '#ef4035';
    get separatorStyle() {
        return `height: ${this.lineHeight}px; background-color: ${this.separatorColor};`;
    }
}