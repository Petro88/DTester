import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {LoginService} from "../shared/services/login.service.ts";

@Component({
    selector: "admin-start",
    templateUrl: "admin-start-page.component.html",
    styleUrls: ["admin-start-page.component.css"]
})
export class AdminStartPageComponent {
        
    constructor(private _loginService:LoginService,
                private _router:Router) {
    }

    ngOnInit() {
    }

    logout() {
        this._loginService.logout()
    }
}
