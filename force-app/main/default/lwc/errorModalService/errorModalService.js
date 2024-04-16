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
                this.payload.headerTxt = customParameters.customHeader; 
            }
            if (customParameters.customBody) {
                this.payload.errMsg = customParameters.customBody;
            }
            if (customParameters.allowSubmit == false) {
                this.payload.allowSub = false;
            }
            if (customParameters.autoSubmission == true) {
                this.payload.autoSubm = true;
                this.payload.allowSub = false;
            }
        }
        publish(this.messageContext, ERROR_MESSAGE_CHANNEL, this.payload);
    }

    openContactUs() {
        publish(this.messageContext, CONTACT_US_MESSAGE_CHANNEL);
    }

}
export default new ErrorModalService();