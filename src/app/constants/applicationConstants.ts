import { ITableHeaders } from '../models/model';
export class ApplicationConstants{

    public static mobileValidationPattern : string = "^((\\+91-?)|0)?[0-9]{10}$";
    public static defaultAccountType: string = '1'
    public static basePath  = 'http://10.117.214.149:8081/';
    public static registerationBasePath  = 'http://10.117.214.87:8081/';
    public static registerationEndpoint  = 'retailbanking/customers';
    public static loginBasePath  = 'http://10.117.214.87:8081/';
    public static loginEndpoint  = 'retailbanking/customers/login';
    public static usersList  = 'users';
    public static accountDetails  = 'account-details';
    public static accountTransactions  = 'account-transactions';
    public static contentTYpe = 'application/json';
    public static userLoginId = 'USER-LOGIN-ID';
    public static groupsList  = 'groups';
    public static userGroupsList  = 'user-groups';
    public static messageList  = 'messages';
    public static joinGroupMessage  = 'Are you sure want to join this group?';
    public static loginErrorMessage = 'Please enter valid login details';
    public static userfullName = 'USER-FULL-NAME';
    public static beneficaryList  = 'account-list';
    public static addPayeeURL  = 'funds-transfer';


    /* form static datas */
    public static confirmPasswordInput = 'userConfirmPassword';
    public static passwordInput = 'userPassword';

    /* table header for account details*/
    public static accountDetailsHeaders: string[] = ["Name", "Account No", "Balance"]
    public static transactionHeaders: string[] = ["From Account ", "To Account", "Balance", "Transaction Type"]

    public static monthsList: string[] =  [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];




}