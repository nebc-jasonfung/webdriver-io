class HomePage {
    get rowRecord () { return $('a[title="PB-00000"]') }
    get getContentCaption () { return $('h1[class="contentCaption"]') }
    get getContentTitle () { return $('h2[class="contentTitle"]') }
    get getFirstTableColumn () { return $('span[title="Services Brief Name"]') }
    get getRowRecordName () { return $('a[title="PB-00000"]') }

    async viewRecord () {
        await this.rowRecord.click();
    }
}

export default new HomePage();
