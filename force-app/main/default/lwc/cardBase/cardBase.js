import { LightningElement, api } from 'lwc';

export default class CardBase extends LightningElement {
    @api variant = 'A';
    @api isFooterCentered = false;
    @api isSeparatorVisible = false;
    renderedCallback(){
        if(this.isFooterCentered){
            const footer = this.template.querySelector(".footer-buttons");
            footer.classList.add("slds-align_absolute-center");
        } 
         if (this.variant === 'B') {
            const cardHeader = this.template.querySelector(".card-header");
            cardHeader.classList.add("variant-b");
        } else if (this.variant === 'C') {
            const card = this.template.querySelector(".card");
            card.classList.add("variant-c");
        }
    }

}