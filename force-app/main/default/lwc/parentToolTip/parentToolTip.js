import { LightningElement, api} from 'lwc';

export default class ParentToolTip extends LightningElement {
    @api addToParentArrayCallback;

    
   @api iconName = 'utility:warning';
    @api toolTipText = 'There you can see the tool tip text';
    @api componentName = 'Tool Tip';
}