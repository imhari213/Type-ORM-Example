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
var Pinno_1 = require("./Pinno");
var Student = (function () {
    function Student() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Student.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            length: 500
        }),
        __metadata("design:type", String)
    ], Student.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Student.prototype, "lastname", void 0);
    __decorate([
        typeorm_1.Column("int"),
        __metadata("design:type", Number)
    ], Student.prototype, "phone", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Pinno_1.Pinno; }, function (pinno) { return pinno.student; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        __metadata("design:type", Pinno_1.Pinno)
    ], Student.prototype, "pinno", void 0);
    Student = __decorate([
        typeorm_1.Entity()
    ], Student);
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map