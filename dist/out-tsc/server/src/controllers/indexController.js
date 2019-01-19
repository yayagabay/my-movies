var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.json({ text: 'API Is /api/movies' });
    };
    return IndexController;
}());
export var indexController = new IndexController();
//# sourceMappingURL=indexController.js.map