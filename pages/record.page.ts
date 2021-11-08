class RecordPage {
    get opportunity () { return $('a[href*="example-opp-2"]') }

    get getAccordionTitle () { return $$('span[class="test-id__section-header-title slds-truncate"]') }
    get getNoInfoText () { return $('p') }

    async viewOpportunity () {
        await this.opportunity.click();
    }
}

export default new RecordPage();
