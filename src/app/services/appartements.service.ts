import { Injectable } from "@angular/core";
import data from "../../assets/json/appartements.json";

@Injectable({
  providedIn: "root"
})
export class AppartementsService {
  constructor() {}

  getAppartements() {
    return data;
  }

  getAppartement(id) {
    return data.filter(item => item.id === id)[0];
  }
}
