import {test, expect} from '@playwright/test';
import { Search } from '../components/Search';

test("serch for !", async({page})=>{
    await page.goto('/');
    const search = new Search(page, '/')
    await search.searchMethod("hrad")

    await expect(page).toHaveURL(/.*hrad.*/)
})  