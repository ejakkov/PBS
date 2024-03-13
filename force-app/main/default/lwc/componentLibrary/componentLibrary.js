import { LightningElement, track, api } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ComponentLibrary extends LightningElement {
 
    @api componentName;

    
    showTooltip = true;
    showCard = false;
    tooltipComponentName = 'c/toolTipDescription'; // This should be the actual name of your LWC component
    cardComponentName = 'c/cardBaseDescription'; // This should be the actual name of your LWC component

    // Example method to toggle between components
    toggleComponents() {
        this.showTooltip = !this.showTooltip;
        this.showCard = !this.showCard;
    }


    @track selectedComponent = {
        component: null,
        instance: null
    };

    tabs = [
        {
            id: "slds-vertical-tabs-0__nav",
            title: "Tool Tip",
            isActive: false // Add isActive property to each tab
        },
        {
            id: "slds-vertical-tabs-1__nav",
            title: "Card Base",
            isActive: false // Add isActive property to each tab
        }
    ];


    renderedCallback() {
        loadStyle(this, cssStyle);
        const tabLinks = this.template.querySelectorAll('.slds-vertical-tabs__link');
        tabLinks.forEach(link => {
            link.addEventListener('click', this.handleTabClick.bind(this));
        });
    }

    handleTabClick(event) {
        event.preventDefault();
        
        const clickedTab = event.target.closest('.slds-vertical-tabs__nav-item');
        const tabContents = this.template.querySelectorAll('.slds-vertical-tabs__content');
        const tabs = Array.from(this.template.querySelectorAll('.slds-vertical-tabs__nav-item'));
        const clickedTabIndex = tabs.indexOf(clickedTab);

        tabContents.forEach((content, index) => {
            if (index === clickedTabIndex) {
                content.classList.remove('slds-hide');
                content.classList.add('slds-show');
            } else {
                content.classList.remove('slds-show');
                content.classList.add('slds-hide');
            }
        });
    }
}