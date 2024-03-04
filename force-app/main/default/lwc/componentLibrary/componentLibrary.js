import { LightningElement, track } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ComponentLibrary extends LightningElement {
    @track componentNames = [];
    renderedCallback() {
        loadStyle(this, cssStyle);
    }
}