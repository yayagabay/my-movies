"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /api/movies' });
    }
}
exports.indexController = new IndexController();
