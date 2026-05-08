export class Product {
    id:number;
    name:string;
    description:string;
    amount:number;
    
    constructor(id:number, name:string, description:string, amount:number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
    }
}
