import { LightningElement, api } from 'lwc';


export default class CardBase extends LightningElement {
    @api variant;
    @api cardTitle;

    get cardClass() {
        if (this.variant === 'A') {
            return 'card variant-a';
        } else if (this.variant === 'B') {
            return 'card variant-b';
        } else if (this.variant === 'C') {
            return 'card variant-c';
        }
        return 'card'; 
    }

    get headerClass() {
        if (this.variant === 'A') {
            return 'card-header variant-a';
        } else if (this.variant === 'B') {
            return 'card-header variant-b';
        } else if (this.variant === 'C') {
            return 'card-header variant-c';
        }
        return 'card-header';
    }

    get showSeparator() {
        if(this.variant == 'B' || this.variant == 'C'){
            return false; 
        } else{
            return true;
        }
        
       
    }

}