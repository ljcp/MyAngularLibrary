import { NgModule } from '@angular/core';

import { MyNotificationComponent }   from './components/my-notification.component';
import { LoginService }   from './components/login.service';


@NgModule({
    imports: [

    ],
    exports: [
            MyNotificationComponent,
            LoginService
    ],
    declarations: [
            MyNotificationComponent,
            LoginService
        ],
    providers: [

    ],
})
export class MyLibrary { }
