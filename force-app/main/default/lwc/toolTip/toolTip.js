import { LightningElement, api} from 'lwc';

export default class ToolTip extends LightningElement {
    @api iconType = 'utility:info';
    @api linkText = null;
    @api link = "javascript:void(0);";

    get isIconType() {
        return this.linkText == null;
    }

    handleMouseAction(event) {
        const tooltip = this.template.querySelector(".tooltip");
        if (event.type == "mouseover") {
            tooltip.classList.remove("slds-fall-into-ground");
            tooltip.classList.add("slds-rise-from-ground");
        } else {
            tooltip.classList.remove("slds-rise-from-ground");
            tooltip.classList.add("slds-fall-into-ground");
        }
      }

}