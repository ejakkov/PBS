import { LightningElement, api, wire, track } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import CUSTOM_MESSAGE_CHANNEL from '@salesforce/messageChannel/CustomMessageChannel__c';

export default class ContactUsModal extends LightningElement {
    @api isModalOpen = false;
    @wire(MessageContext)
    messageContext;
    connectedCallback() {
        this.handleSubscribe();
        if (this.customHeader) {
            this.label.headerText = this.customHeader;
        }
        if (this.customBody) {
            this.label.errorMessage = this.customBody;
        }
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
        this.isModalOpen = false;
    }

    handleSubscribe() {
        console.log('handle subscribe from contact us')
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, CUSTOM_MESSAGE_CHANNEL,
                (parameter)=>{
                    console.log('subscribed from contact us')
                    const modal = this.template.querySelector("c-base-modal");
                    modal.open()
                    // if (parameter.targetModal == 'Contact Us Modal' ){
                    //    
                    //    ; 
                    // } else{
                    //     this.handleUnsubscribe();
                    // }
                    
                }
                )
        }
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription=null;
        this.isModalOpen = false;
    }

    @track textValue = '';
    @track isSubmitDisabled = true;
    @track emailValid = false;

    handleTextChange(event) {
        this.textValue = event.target.value;
        this.checkFormValidity();
    }

    handleEmailChange(event) {
        const emailInput = event.target;
        this.emailValid = emailInput.checkValidity();
        this.checkFormValidity();
    }

    checkFormValidity() {
        // Check if both email and description are valid
        this.isSubmitDisabled = !this.emailValid || this.textValue.length < 3;
    }


    closeModal() {
      this.isModalOpen = false;
      const modal = this.template.querySelector("c-base-modal");
      modal.close();
    }
}