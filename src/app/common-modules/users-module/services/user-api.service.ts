import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../../../constants/applicationConstants';
import { RestService } from '../../../core-services/rest.service';
import { IUsers, IAccountDetails, ITransactionDetails, IUserLogin, IBeneficiary , IpaymentTransaction, IResponseBlock} from '../../../models/model';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  
  constructor(private userAddService: RestService<IResponseBlock>, private userListService: RestService<IUsers[]>, 
    private userAccountDetails: RestService<IAccountDetails>, private userTransactionService: RestService<ITransactionDetails[]>,
    private userBeneficiary: RestService<IBeneficiary[]>,
    private  addPaymentService: RestService<IpaymentTransaction>) { }
    /* to get the list of  users from database */
  public getUser(userId: string = ''): Observable<IResponseBlock> {
    return this.userAddService.getData(ApplicationConstants.basePath, ApplicationConstants.usersList,
      ApplicationConstants.contentTYpe, userId);

  }
   /* to add user to database */
  public addUser(userData: IUsers): Observable<IResponseBlock> {
    return this.userAddService.postData(userData, ApplicationConstants.basePath, ApplicationConstants.registerationEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }
 /* to get the session for the login user*/
  public setSessionItem(itemLabel: string, itemData: string) {
    sessionStorage.setItem(itemLabel, itemData);

  }
  /* to get the list of  users from database as array*/
  public getUsersList(userId: string = ''): Observable<IUsers[]> {
    return this.userListService.getData(ApplicationConstants.basePath, ApplicationConstants.usersList,
      ApplicationConstants.contentTYpe, userId);

  }
   /* to get the list of  users from database */
   public getUserAccountDetails(userId: string = ''): Observable<IAccountDetails> {
    return this.userAccountDetails.getData(ApplicationConstants.basePath, ApplicationConstants.accountDetails,
      ApplicationConstants.contentTYpe, userId);

  }

  /* to get the list of transactions*/
  public getLastestTransactions(accountId: string = ''): Observable<ITransactionDetails[]> {
    return this.userTransactionService.getData(ApplicationConstants.basePath, ApplicationConstants.addPayeeURL,
      ApplicationConstants.contentTYpe, accountId);

  }

   /* to add user to database */
   public loginUser(userData: IUserLogin): Observable<IResponseBlock> {
    return this.userAddService.postData(userData, ApplicationConstants.basePath, ApplicationConstants.loginEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

   /* to get the list of  users from database as array*/
   public getAccounts(userId: string = ''): Observable<IBeneficiary[]> {
    return this.userBeneficiary.getData(ApplicationConstants.basePath, ApplicationConstants.beneficaryList,
      ApplicationConstants.contentTYpe, userId);

  }
    /* to add user to database */
    public addPayment(userData: IpaymentTransaction): Observable<IpaymentTransaction> {
      return this.addPaymentService.postData(userData, ApplicationConstants.basePath, ApplicationConstants.addPayeeURL,
        ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
    }
}
