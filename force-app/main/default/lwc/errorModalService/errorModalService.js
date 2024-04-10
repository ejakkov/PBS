import { createMessageContext, publish } from "lightning/messageService";
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import headerText from "@salesforce/label/c.PBS_Error_Header";
import closeBtn from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtn from "@salesforce/label/c.PBS_Error_ContactBtn";

class ErrorModalService {

    messageContext = createMessageContext();
    header = headerText;
    body = errorMessage;
    openErrorModal(customParameters) {
        if (customParameters != undefined){
             if (customParameters.customHeader != undefined) {
                this.header = customParameters.customHeader;
            }
            if (customParameters.customBody != undefined) {
                this.body = customParameters.customBody;
            }
        }
       
        let payload = {
                       conBtn: contactBtn,
                       errMsg: this.body,
                       headerTxt: this.header,
                       clBtn: closeBtn
                       };
        publish(this.messageContext, CUSTOM_MESSAGE_CHANNEL, payload);

        
    }

}
export default new ErrorModalService();