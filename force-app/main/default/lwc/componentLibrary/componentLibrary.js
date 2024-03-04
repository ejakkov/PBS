import { LightningElement, track } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ComponentLibrary extends LightningElement {
    @track componentNames = [];
    apiAttributes = [
        { key: '1', apiName: 'apiName1', defaultValue: 'defaultValue1', description: 'description1' },
        { key: '2', apiName: 'apiName2', defaultValue: 'defaultValue2', description: 'description2' },
        // Add more API attributes as needed
    ];
    renderedCallback() {
        loadStyle(this, cssStyle);
    }
}