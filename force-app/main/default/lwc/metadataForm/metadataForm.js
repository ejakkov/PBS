import { LightningElement, wire } from 'lwc';
import getResponse from '@salesforce/apex/MockAPI.getMockResponse';

export default class MetadataForm extends LightningElement {
    @wire (getResponse) mockResponse ({ error, data }) {
        if (data) {
          console.log('data', data);
          this.record = data.customFieldText;
          this.error = undefined;
        } else if (error) {
          this.error = error;
          this.record = undefined;
        }
      }

    renderedCallback() {
        console.log(this.mockResponse.data);
        console.log('faina faina');
    }
}