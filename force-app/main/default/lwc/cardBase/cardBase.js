import { LightningElement, api } from 'lwc';


export default class CardBase extends LightningElement {
    @api variant;
    @api cardTitle;
    @api footerCentered = false;
    cardClassVar = 'card';
    cardHeaderVar = 'card-header';
    @api showSeparator = false;

    renderedCallback(){
        if(this.footerCentered){
            const footer = this.template.querySelector(".footer-buttons");
            footer.classList.add("slds-align_absolute-center");
        }
        const card = this.template.querySelector(".card");
        if (this.variant === 'A') {
            card.classList.add("variant-a");
        } else if (this.variant === 'B') {
            card.classList.add("variant-b");
        } else if (this.variant === 'C') {
            card.classList.add("variant-c");
        }
    }

    get headerClass() {
        if (this.variant === 'A') {
            this.cardHeaderVar = 'card-header variant-a';
        } else if (this.variant === 'B') {
            this.cardHeaderVar = 'card-header variant-b';
        } else if (this.variant === 'C') {
            this.cardHeaderVar = 'card-header variant-c';
        }
        return this.cardHeaderVar;
    }


}