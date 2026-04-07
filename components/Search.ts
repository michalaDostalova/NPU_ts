import{type Page, Locator} from '@playwright/test';


export class Search{
protected page: Page;
protected searchBox: Locator;
protected searchButton: Locator;

constructor(page:Page, url:string){
    this.page=page;
    this.searchBox = page.getByPlaceholder('Hledat');
    this.searchButton = page.getByRole('button', { name: 'Hledat' });
  
    }

    async fillSearchBox(text:string): Promise<void>{
        await this.searchBox.fill(text)
}
    async clickSearchButton(): Promise<void>{
        await this.searchButton.click();
}

    async search(text:string): Promise<void>{
        await this.fillSearchBox(text);
        await this.clickSearchButton();
    }
  }
