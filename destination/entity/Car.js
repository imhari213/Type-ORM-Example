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
var Accountone_1 = require("./Accountone");
var Car = (function () {
    function Car() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Car.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 500
        }),
        __metadata("design:type", String)
    ], Car.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("int"),
        __metadata("design:type", Number)
    ], Car.prototype, "carno", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Accountone_1.Accountone; }, function (owner) { return owner.carh; }, {
            cascadeInsert: true
        }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Accountone_1.Accountone)
    ], Car.prototype, "owner", void 0);
    Car = __decorate([
        typeorm_1.Entity()
    ], Car);
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map