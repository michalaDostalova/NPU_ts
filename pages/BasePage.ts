import {type Locator, type Page}from "@playwright/test";

export class BasePage{
    protected page:Page;
    protected url:string;
    protected titleCheck:Locator
    protected searchBox:Locator
    protected socLinks:Locator

    constructor(page:Page, url:string){
        this.page=page;
        this.url=url;
        this.titleCheck = page.getByText('Národní památkový ústav - Úvod')
        this.searchBox = page.getByRole('textbox', { name: 'Search' });
        this.socLinks = page.locator('.social-links');
    }
    async open(): Promise<void>{
        await this.page.goto(this.url);
    }
    async goto(url:string): Promise<void>{
        await this.page.goto(url);
    }

 
}