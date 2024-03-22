import { LightningElement, api } from 'lwc';

export default class CardBase extends LightningElement {
    @api variant = 'A';
    @api isFooterCentered = false;
    @api isSeparatorVisible = false;

    defaultBodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ex ut mi pulvinar volutpat. Aliquam hendrerit nibh quis nulla molestie'
    + 'venenatis. Quisque maximus, purus ut dapibus iaculis, lorem tortor rutrum neque, ut aliquam urna urna vitae ipsum.'
        +'Nullam varius eros sit amet velit pulvinar, sit amet mollis libero malesuada.';
        
    renderedCallback(){
        if(this.isFooterCentered){
            const footer = this.template.querySelector(".footer-buttons");
            footer.classList.add("slds-align_absolute-center");
        } 
         if (this.variant === 'B') {
            const card = this.template.querySelector(".card");
            const cardHeader = this.template.querySelector(".card-header");
            cardHeader.classList.add("variant-b");
        } else if (this.variant === 'C') {
            const card = this.template.querySelector(".card");
            const cardHeader = this.template.querySelector(".card-header");
            card.classList.add("variant-c");
        }
    }

}