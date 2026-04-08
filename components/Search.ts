import{type Page, Locator} from '@playwright/test';


export class Search{
protected page: Page;
protected searchBox: Locator;
protected searchButton: Locator;

constructor(page:Page, url:string){
    this.page=page;
    this.searchBox = page.locator('input[name="headSearch[query]"]')
    this.searchButton = page.locator('button[name="headSearch[send]"]');
  
    }

    async fillSearchBox(text:string): Promise<void>{
        await this.searchBox.fill(text)
}
    async clickSearchButton(): Promise<void>{
        await this.searchButton.click();
}

    async searchMethod(text:string): Promise<void>{
        await this.fillSearchBox(text);
        await this.clickSearchButton();
    }
  }
