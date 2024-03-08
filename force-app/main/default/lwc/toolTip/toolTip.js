import { LightningElement, api, track } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:info'; // Default icon type
    @api linkText = null; // Default link text
    @track iconVariant = 'base';

    renderedCallback() {
        loadStyle(this, cssStyle);
    }

    get isIconType() {
        return this.linkText == null;
    }

    handleMouseEnter(event) {
        this.template.querySelector('.tooltip').classList.add('show');
        if (event.target.tagName === 'LIGHTNING-ICON') {
            this.iconStyle = 'color: red;'; // Change icon color to red on hover
        } else {
            this.linkStyle = 'color: red;'; // Change link color to red on hover
        }

    }

    handleMouseLeave() {
        this.template.querySelector('.tooltip').classList.remove('show');

    }

}