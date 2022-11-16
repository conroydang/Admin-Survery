import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/admin/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/admin/user/user.component';
import { TableComponent }           from '../../pages/admin/table/table.component';
import { TypographyComponent }      from '../../pages/admin/typography/typography.component';
import { IconsComponent }           from '../../pages/admin/icons/icons.component';
import { MapsComponent }            from '../../pages/admin/maps/maps.component';
import { NotificationsComponent }   from '../../pages/admin/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/admin/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
