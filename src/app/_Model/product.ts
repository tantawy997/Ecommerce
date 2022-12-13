export class Product {
    constructor(public id:number, public title:string, public price:number, public category:string | Blob
        ,public description:string,public image:string){
    }
}
