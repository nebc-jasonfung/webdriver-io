import LoginPage from '../../pages/login.page';
import HomePage from '../../pages/home.page';
import RecordPage from '../../pages/record.page';

describe('Community', () => {
    it('should login successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('jasonf+test@nebulaconsulting.co.uk', 'Partnerexp1!');

        await expect(HomePage.getContentCaption).toHaveTextContaining('Welcome');
        await expect(HomePage.getContentTitle).toHaveText('Jason Fung');
        await expect(HomePage.getFirstTableColumn).toExist();
        await expect(HomePage.getRowRecordName).toBeClickable();
    });
});

describe('Home page', () => {
    it('should see record information', async () => {
        await HomePage.viewRecord();

        await expect(RecordPage.getAccordionTitle).toBeElementsArrayOfSize(3);
        await RecordPage.getAccordionTitle.forEach(element => expect(element)
            .toHaveTextContaining(['Partner Brief Info', 'Opportunity Info', 'Rejection Information']));
    });
});

describe('Opportunity page', () => {
    it('should have no information available', async () => {
        await RecordPage.viewOpportunity();

        await expect(RecordPage.getNoInfoText).toHaveText('No information available')
    });
});