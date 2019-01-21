import * as tslib_1 from "tslib";
import { Router } from 'express';
var IndexController = /** @class */ (function () {
    function IndexController() {
        this.router = Router();
    }
    IndexController.prototype.index = function (req, res) {
        res.json({ text: 'API Is /api/movies' });
    };
    IndexController.prototype.checkExist = function (req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                id = req.params.id;
                res.send("hello, " + id + "!");
                return [2 /*return*/];
            });
        });
    };
    return IndexController;
}());
export var indexController = new IndexController();
export default indexController;
//# sourceMappingURL=indexController.js.map