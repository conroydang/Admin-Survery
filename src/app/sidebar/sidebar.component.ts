import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: 'management-survey',         title: 'Manage Survey Forms',             icon:'nc-bookmark-2',    class: '' },
    // { path: '/maps',          title: 'Thống kê kết quả khảo sát',              icon:'nc-pin-3',      class: '' },
    { path: 'survey-result', title: "Result's survey",     icon:'nc-satisfied',    class: '' },
    { path: 'management-users',          title: 'Management Users',      icon:'nc-single-02',  class: '' },
    { path: 'co2',         title: "General's CO2",        icon:'nc-tile-56',    class: '' },
    { path: 'log-out',    title: 'Sign-Out',        icon:'nc-button-play', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
