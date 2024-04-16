import { createMessageContext, publish } from "lightning/messageService";
import ERROR_MESSAGE_CHANNEL from '@salesforce/messageChannel/errorMessageChannel__c';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';

class ErrorModalService {

    messageContext = createMessageContext();
    header;
    body;
    allowSubmit;
    autoSubmission;

    payload = {};
    openErrorModal(customParameters) {
        if (customParameters){
             if (customParameters.customHeader) {
                this.header = customParameters.customHeader;
                this.payload.headerTxt = this.header;
            }
            if (customParameters.customBody) {
                this.body = customParameters.customBody;
                this.payload.errMsg = this.body;
            }
            if (customParameters.allowSubmit == false) {
                this.allowSubmit = false;
                this.payload.allowSub = this.allowSubmit;
            }
            if (customParameters.autoSubmission == true) {
                this.autoSubmission = true;
                this.allowSubmit = false;
                this.payload.autoSubm = this.autoSubmission;
                this.payload.allowSub = this.allowSubmit;
            }
        }
        publish(this.messageContext, ERROR_MESSAGE_CHANNEL, this.payload);
    }

    openContactUs() {
        publish(this.messageContext, CONTACT_US_MESSAGE_CHANNEL);
    }

}
export default new ErrorModalService();