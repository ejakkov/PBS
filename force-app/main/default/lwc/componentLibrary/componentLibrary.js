import { LightningElement, track } from 'lwc';
import cssStyle from '@salesforce/resourceUrl/PBS_CSS';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ComponentLibrary extends LightningElement {
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

        // Remove active state from all tabs
        this.template.querySelectorAll('.slds-vertical-tabs__nav-item').forEach(tab => {
            tab.classList.remove('slds-has-focus');
            tab.querySelector('.slds-vertical-tabs__link').setAttribute('aria-selected', 'false');
        });

        // Add active state to the clicked tab
        clickedTab.classList.add('slds-has-focus');
        clickedTab.querySelector('.slds-vertical-tabs__link').setAttribute('aria-selected', 'true');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('slds-show');
            content.classList.add('slds-hide');
        });

        // Show the corresponding tab content
        const tabId = clickedTab.querySelector('.slds-vertical-tabs__link').getAttribute('aria-controls');
        const activeContent = this.template.querySelector(`#${tabId}`);
        activeContent.classList.remove('slds-hide');
        activeContent.classList.add('slds-show');
    }
}