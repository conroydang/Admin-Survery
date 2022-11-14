import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Tổng quan',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Quản lý câu hỏi',             icon:'nc-bookmark-2',    class: '' },
    // { path: '/maps',          title: 'Thống kê kết quả khảo sát',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Thống kê người tham gia khảo sát',     icon:'nc-satisfied',    class: '' },
    { path: '/user',          title: 'Thông tin người dùng',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Thống kê số liệu CO2',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Đăng Xuất',        icon:'nc-button-play', class: '' },
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
