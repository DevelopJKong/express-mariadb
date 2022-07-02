"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const config_1 = require("./config");
const sequelize_1 = __importDefault(require("sequelize"));
const { host, user, database, password, port } = config_1.config.db;
exports.sequelize = new sequelize_1.default.Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false,
    port,
});
//# sourceMappingURL=db.js.map