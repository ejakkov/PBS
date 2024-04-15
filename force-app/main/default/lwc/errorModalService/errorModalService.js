import { createMessageContext, publish } from "lightning/messageService";
import ERROR_MESSAGE_CHANNEL from '@salesforce/messageChannel/errorMessageChannel__c';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import headerText from "@salesforce/label/c.PBS_Error_Header";
import closeBtn from "@salesforce/label/c.PBS_Error_CloseBtn";
import contactBtn from "@salesforce/label/c.PBS_Error_ContactBtn";
import submitBtn from "@salesforce/label/c.PBS_ContactUs_SubmitBtn";
import descriptionLabel from "@salesforce/label/c.PBS_ContactUs_DescriptionLabel";
import emailLabel from "@salesforce/label/c.PBS_ContactUs_EmailLabel";
import typingPlaceholder from "@salesforce/label/c.PBS_ContactUs_Placeholder";


class ErrorModalService {

    messageContext = createMessageContext();
    header = headerText;
    body = errorMessage;
    allowSubmit = true;
    autoSubmission = false;
    openErrorModal(customParameters) {
        if (customParameters){
             if (customParameters.customHeader) {
                this.header = customParameters.customHeader;
            }
            if (customParameters.customBody) {
                this.body = customParameters.customBody;
            }
            if (customParameters.allowSubmit == false) {
                this.allowSubmit = false;
            }
            if (customParameters.autoSubmission == true) {
                this.autoSubmission = true;
                this.allowSubmit = false;
            }
        }
       
        let payload = {
                       conBtn: contactBtn,
                       errMsg: this.body,
                       headerTxt: this.header,
                       clBtn: closeBtn,
                       allowSub: this.allowSubmit,
                       autoSubm: this.autoSubmission
                       };
        publish(this.messageContext, ERROR_MESSAGE_CHANNEL, payload);
    }

    openContactUs() {
        let payload = {
            clBtn: closeBtn,
            submBtn: submitBtn,
            descLbl: descriptionLabel,
            emLbl: emailLabel,
            typPlc: typingPlaceholder,
            headerTxt: contactBtn
            };
        publish(this.messageContext, CONTACT_US_MESSAGE_CHANNEL, payload);

    }

}
export default new ErrorModalService();