export class IUsers {
    id?: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    mobileNo: string;
    address: string;
    emailId: string;
    accountType?: string;
    userName: string;
    password: string;

}
export class IUserLogin{
    id?: number;
    userName: string;
    password: string;
}

export class ITableHeaders {
    columnName: string;
    
}

export class IAccountDetails {
    id?: number;
    account_no: number;
    balance: number;
    account_satus: string;
    account_type: string;
    customerId: number;

}

export class IAccountDetailBody{
    name: string;
    accountNumber: number;
    balance: number;
 }

 export class ITransactionDetails{
    transactionType:string;
    transactionAmount:Number;
    transactionDescription:string;
    fromAccount:Number;
    toAccount:Number;
    transactionDate : string
    
 }

 export class IBeneficiary{
    id?: number;
    accountNumber: string;
    message: string;
    statusCode: number
 }
 export class IpaymentTransaction{
    id?:number;
    transactionAmount:Number;
    transactionDescription:string;
    fromAccount:Number;
    toAccount:Number;
    transactionDate? : string
    
 }

 export class IResponseBlock{
    statusCode?:string;
     message? : string;
     customerCode?: string;
    
 }