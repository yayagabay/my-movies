import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
    };
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss'],
            // Add this:
            animations: [
                trigger('listStagger', [
                    transition('* <=> *', [
                        query(':enter', [
                            style({ opacity: 0, transform: 'translateY(-15px)' }),
                            stagger('50ms', animate('550ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        query(':leave', animate('50ms', style({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map