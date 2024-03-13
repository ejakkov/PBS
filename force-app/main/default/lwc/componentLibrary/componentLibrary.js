import { LightningElement, track } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ComponentLibrary extends LightningElement {
 
    @track selectedComponent = {
        component: null,
        instance: null
    };

    tabs = [
        {
            id: "slds-vertical-tabs-0__nav",
            ariaControls: "slds-vertical-tabs-0",
            dataTabId: "0",
            title: "Tool Tip",
            isActive: false // Add isActive property to each tab
        },
        {
            id: "slds-vertical-tabs-1__nav",
            ariaControls: "slds-vertical-tabs-1",
            dataTabId: "1",
            title: "Card Base",
            isActive: false // Add isActive property to each tab
        }
    ];
    isSelectedTab(tab) {
        return selectedComponent.component === tab.dataTabId;
    }
    
    // Later in your template or JavaScript logic where you need to check if the tab is selected:
    


    isSelectedTab(tab) {
        return this.selectedComponent.component === tab.dataTabId;
    }

    renderedCallback() {
        loadStyle(this, cssStyle);
        // Add event listeners to tab links
        const tabLinks = this.template.querySelectorAll('.slds-vertical-tabs__link');
        tabLinks.forEach(link => {
            link.addEventListener('click', this.handleTabClick.bind(this));
        });
    }

    handleTabClick(event) {
        event.preventDefault();
        console.log('clicked');
        const clickedTab = event.target.closest('.slds-vertical-tabs__nav-item');
        const tabContents = this.template.querySelectorAll('.slds-vertical-tabs__content');

        this.template.querySelectorAll('.slds-vertical-tabs__nav-item').forEach(tab => {
            tab.classList.remove('slds-has-focus');
        });

        clickedTab.classList.add('slds-has-focus');

        tabContents.forEach(content => {
            content.classList.remove('slds-show');
            content.classList.add('slds-hide');
        });

        const tabId = clickedTab.querySelector('.slds-vertical-tabs__link').getAttribute('aria-controls');
        const activeContent = this.template.querySelector(`#${tabId}`);
        activeContent.classList.remove('slds-hide');
        activeContent.classList.add('slds-show');
    }
}