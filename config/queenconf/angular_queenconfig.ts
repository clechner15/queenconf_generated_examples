import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Queenconfig {
    public config = new Config();

 }


class Admin
{
    static readonly adminPageIconName = 'user';
};

class Config
{
    static readonly showExtraHeader = extra;
    static readonly rowsPerPage = 5;
    static readonly userMenuVisible = false;
    static readonly showBlackFridayBanner = false;
    static readonly admin = new Admin();
};


