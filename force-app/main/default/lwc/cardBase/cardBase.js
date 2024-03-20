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
        const card = this.template.querySelector(".card");
        const cardHeader = this.template.querySelector(".card-header");
         if (this.variant === 'B') {
            cardHeader.classList.add("variant-b");
        } else if (this.variant === 'C') {
            card.classList.add("variant-c");
        }
        
    }

}