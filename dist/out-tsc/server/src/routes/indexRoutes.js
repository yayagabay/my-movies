import { Router } from 'express';
import indexController from '../controllers/indexController';
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.router.get('/', indexController.index);
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
export default indexRoutes.router;
//# sourceMappingURL=indexRoutes.js.map