"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppResponseError extends Error {
    constructor(message, defaultStatusCode = 333) {
        super(message);
        this.error400 = (errorMessage) => {
            switch (errorMessage) {
                case 'All fields must be filled':
                    return 400;
                default:
            }
        };
        this.error401 = (errorMessage) => {
            switch (errorMessage) {
                case 'Invalid email or password':
                case 'Token not found':
                case 'Token must be a valid token':
                    return 401;
                default:
            }
        };
        this.error404 = (errorMessage) => {
            switch (errorMessage) {
                case 'Bad Request':
                case 'There is no team with such id!':
                    return 404;
                default:
            }
        };
        this.error422 = (errorMessage) => {
            switch (errorMessage) {
                case '"default" is not allowed':
                case 'It is not possible to create a match with two equal teams':
                    return 422;
                default:
            }
        };
        this.mapMsgToStatusCode = (errorMessage = '') => this.error400(errorMessage) || this.error422(errorMessage) || this.error401(errorMessage)
            || this.error404(errorMessage);
        this.statusCode = this.mapMsgToStatusCode(message) || defaultStatusCode;
    }
}
exports.default = AppResponseError;
//# sourceMappingURL=AppResponseError.js.map