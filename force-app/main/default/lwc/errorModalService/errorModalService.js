import { createMessageContext, publish } from "lightning/messageService";
import ERROR_MESSAGE_CHANNEL from '@salesforce/messageChannel/errorMessageChannel__c';
import CONTACT_US_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactUsMessageChannel__c';
import errorMessage from "@salesforce/label/c.PBS_Error_Message";
import submitBtn from "@salesforce/label/c.PBS_ContactUs_SubmitBtn";
import descriptionLabel from "@salesforce/label/c.PBS_ContactUs_DescriptionLabel";
import emailLabel from "@salesforce/label/c.PBS_ContactUs_EmailLabel";
import typingPlaceholder from "@salesforce/label/c.PBS_ContactUs_Placeholder";


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