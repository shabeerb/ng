export class project{
    id:number;
    infomation:string;
}

export class meters{
    constructor(
       public va: number,
       public kw: number,
       public kva:number,
       public active:number,
       public brstaus: string
    ){ }
}

export class employee{
    constructor(
        public id:number,
        public name:string,
        public age:number
    ) {}
}