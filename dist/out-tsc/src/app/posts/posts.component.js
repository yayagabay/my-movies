import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
var PostsComponent = /** @class */ (function () {
    function PostsComponent(data) {
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPosts().subscribe(function (data) { return _this.posts$ = data; });
    };
    PostsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], PostsComponent);
    return PostsComponent;
}());
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map