import { element } from 'protractor';

export class Order{
    constructor(public Id:number, public CustomerId:number,public OrderTime:Date,public Element:string, public SiteAdress:string, public ConcreteCheck:boolean,
        public PumpNeeded:boolean,public PumpType:string,public StartTime:Date,public EndTime:Date,public IsIssue:boolean,public Status:boolean ){

    }

   public static ordersArray:Array<Order>=[new Order(12,4, new Date(),"","Rabi Akiva",true, true, "",new Date(),new Date(),true,true),
   new Order(13, 5, new Date(), "","Rabi Akiva 1",true, true, "",new Date(),new Date(),true,true),
   new Order(14, 6, new Date(), "","Rabi Akiva 2",true, true, "",new Date(),new Date(),true,true)
   ];

 
}