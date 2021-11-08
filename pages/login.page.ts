import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('input[placeholder="Username"]') }
    get inputPassword () { return $('input[placeholder="Password"]') }
    get btnSubmit () { return $('button[type="button"]') }

    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('servicespartners/s/');
    }
}

export default new LoginPage();
