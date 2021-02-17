import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  public isLanguageChanged: EventEmitter<boolean>;

  constructor() {
    this.isLanguageChanged = new EventEmitter();
  }
}
