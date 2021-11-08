export default class Page {
    open (path: string) {
        return browser.url(`https://partnerexp-signal-ai-community.cs119.force.com/${path}`)
    }
}
