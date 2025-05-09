import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Queenconfig {
    public config = new Config();

 }


class Admin
{
};

class Config
{
    static readonly admin = new Admin();
};


