import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService {
  // activatedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  activatedSubject: Subject<boolean> = new Subject<boolean>();
}
