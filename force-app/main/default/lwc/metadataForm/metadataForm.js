import { LightningElement, wire } from 'lwc';
import getResponse from '@salesforce/apex/MockAPI.getMockResponse';

export default class MetadataForm extends LightningElement {

    fieldsData;
    isDataLoaded = false;
    @wire (getResponse) mockResponse ({ error, data }) {
        if (data) {
          this.fieldsData = data[0].Fields;
          this.isDataLoaded = true;
          this.renderHTML();
        } else if (error) {
          console.log(error);
        }
      }

      renderHTML() {
        this.fieldsData = this.fieldsData.map(field => {
          return {
              ...field,
              isTextType: field.customFieldType === 'TEXT',
              isYesNoType: field.customFieldType === 'YESNO'
          };
      });
    }





}