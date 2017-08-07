"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Topic_1 = require("./Topic");
var Websites = (function () {
    function Websites() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Websites.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 500
        }),
        __metadata("design:type", String)
    ], Websites.prototype, "weburl", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Websites.prototype, "websitename", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Topic_1.Topic; }, function (topic) { return topic.website; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Websites.prototype, "topic", void 0);
    Websites = __decorate([
        typeorm_1.Entity()
    ], Websites);
    return Websites;
}());
exports.Websites = Websites;
//# sourceMappingURL=Websites.js.map