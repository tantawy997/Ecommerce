import { rate } from 'src/app/_Model/rate';

export class Product {
    constructor(public id:number, public title:string, public price:number, public category:string
        ,public description:string,public image:string | Blob,public rating:rate,public amount?:number,public TotalPrice?:string){
    }
}
