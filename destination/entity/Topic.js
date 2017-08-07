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
var Websites_1 = require("./Websites");
var Topic = (function () {
    function Topic() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Topic.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 500
        }),
        __metadata("design:type", String)
    ], Topic.prototype, "topicname", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Websites_1.Websites; }, function (website) { return website.topic; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Topic.prototype, "website", void 0);
    Topic = __decorate([
        typeorm_1.Entity()
    ], Topic);
    return Topic;
}());
exports.Topic = Topic;
//# sourceMappingURL=Topic.js.map