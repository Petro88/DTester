import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule}     from '@ng-bootstrap/ng-bootstrap';
import {routing}       from "./app.routing";

import {AppComponent}            from './app/app.component';
import {LoginComponent}          from "./app/login/login.component";
import {StartPageComponent}      from "./app/studentpart/start-page.component";
import {AdminStartPageComponent} from "./app/admin-start/admin-start-page.component.ts";
import {StatisticComponent} from "./app/statistic/statistic.component";
import {SubjectComponent}        from "./app/subjects/subject.component";
import {AddeditSubjectComponent}  from './app/subjects/addedit_subject/addedit-subject.component';
import {AddeditGroupComponent}  from './app/group/addedit-group.component';
import {FacultyComponent}        from "./app/faculty/faculty.component";
import {GroupComponent}        from './app/group/group.component';
import {SpecialityComponent}        from "./app/speciality/speciality.component";
import {AdminUserComponent} from "./app/admin_user/admin-user.component";
import {StudentComponent}        from "./app/student/student.component";
import {AuthAdminGuard} from './app/shared/services/auth-admin.guard.ts';
import {AuthStudentGuard} from './app/shared/services/auth-student.guard.ts';
import {AddEditAdminUserComponent} from "./app/admin_user/add_edit_admin_user/add-edit-admin-user.component";
import {LoginService}        from './app/shared/services/login.service';
import {CRUDService}       from './app/shared/services/crud.service';
import {SpecialityService}       from './app/shared/services/speciality.service';
import { SubjectService } from './app/shared/services/subject.service';
import { GroupService } from './app/shared/services/group.service';
import {StudentNewProfileComponent} from "./app/student/student-new-profile.component";
import {StudentProfileComponent} from "./app/student/student-profile.component";
import {AddEditModalComponent} from "./app/shared/components/addeditmodal/add-edit-modal.component"


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SubjectComponent,
        AddeditSubjectComponent,
        StartPageComponent,
        AdminStartPageComponent,
        FacultyComponent,
        StatisticComponent,
        GroupComponent,
        AdminUserComponent,
        AddEditAdminUserComponent,
        SpecialityComponent,
        AddeditGroupComponent,
        StudentComponent,
        StudentNewProfileComponent,
        StudentProfileComponent,
        AddEditModalComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        LoginService,
        CRUDService,
        SpecialityService,
        SubjectService,
        GroupService,
        HttpModule,
        AuthAdminGuard,
        AuthStudentGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
