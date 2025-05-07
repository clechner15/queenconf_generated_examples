import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Queenconfig {
    public config = new Config();

 }


class Extra
{
};

class Page
{
    static readonly extra = new Extra();
};

class Config
{
    static readonly page = new Page();
};


