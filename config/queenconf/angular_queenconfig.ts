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
    static readonly showExtraHeader = true;
    static readonly rowsPerPage = 7;
    static readonly showBlackFridayBanner = false;
    static readonly admin = new Admin();
};


