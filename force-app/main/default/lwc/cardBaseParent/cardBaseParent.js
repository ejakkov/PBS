import { LightningElement } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class CardBaseParent extends LightningElement {
    renderedCallback() {
        loadStyle(this, cssStyle);
    }
}