import {type Locator, type Page}from "@playwright/test";

export class BasePage{
    protected page:Page;
    protected url:string;
  
    constructor(page:Page, url:string){
        this.page=page;
        this.url=url;
    }   

    async open(): Promise<void>{
        await this.page.goto(this.url);
    }
    async goto(url:string): Promise<void>{
        await this.page.goto(url);
    }
}