"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
function required(key, defaultValue = '') {
    const value = process.env[key] || defaultValue;
    if (value === null) {
        throw new Error(`Key ${key} is undefined`);
    }
    return value;
}
exports.config = {
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
        port: parseInt(required('DB_PORT')),
    },
};
//# sourceMappingURL=config.js.map