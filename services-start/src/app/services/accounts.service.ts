import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
//this means that here we want to inject something
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor(private logger: LoggingService) {
  }

  addAccount(name: string, status: string): void {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string): void {
    this.accounts[id].status = status;
    this.logger.logStatusChanged(status);
  }
}
