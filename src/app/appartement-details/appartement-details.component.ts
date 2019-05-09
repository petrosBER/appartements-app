import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppartementsService } from "../services/appartements.service";

@Component({
  selector: "app-appartement-details",
  templateUrl: "./appartement-details.component.html",
  styleUrls: ["./appartement-details.component.scss"]
})
export class AppartementDetailsComponent implements OnInit {
  appartement;

  constructor(
    private service: AppartementsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.appartement = this.service.getAppartement(id);
    });
  }

  onClick() {
    this.router.navigate(["/appartements"]);
  }
}
