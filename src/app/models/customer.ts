export class Customer{
    constructor(public Id:number,public IdentityNumber:string, public FirstName?:string, public LastName?:string, public CompanyName?:string,public BusinessCode?:string,
        public Email?:string, public PhoneNumber?:string,public CellNumber?:string, public Address?:string, public BirthDate?:Date,
        public UserName?:string, public Password?:string){}

        public static CustomerArray:Array<Customer>=[new Customer(4,"121314", "Chava", "Menachem", "XXX","","13@g.com","0527165", "Chava20", "21"),
        new Customer(5,"121315", "Rachel", "Marx", "SSS","","155@g.com","050411111", "Rac123", "21222223"),
        new Customer(6,"121316", "Daniel", "Man", "AAA","","156@g.com","0533333512", "Dan12356", "21222223")]
      
}
