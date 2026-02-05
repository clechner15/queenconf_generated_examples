import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Hazelconf {
    public config = new Config();

 }


class Menu
{
};

class New4
{
};

class New5
{
    static readonly new1 = ;
    static readonly new2 = ;
};

class Config
{
    static readonly rowsPerPage = 10;
    static readonly showBlackFridayBanner = true;
    static readonly showExtraHeader = false;
    static readonly menu = new Menu();
    static readonly new4 = new New4();
    static readonly new5 = new New5();
};


