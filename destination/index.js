"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Accountone_1 = require("./entity/Accountone");
var Student_1 = require("./entity/Student");
var Pinno_1 = require("./entity/Pinno");
var Car_1 = require("./entity/Car");
var Websites_1 = require("./entity/Websites");
var Topic_1 = require("./entity/Topic");
var http = require("http");
var Relation = (function () {
    function Relation() {
        this.server();
        this.connect();
    }
    Relation.prototype.server = function () {
        http.createServer(function (request, response) {
            response.end("hello world");
        }).listen(8080, '127.0.0.1');
        console.log("hai...!!! server is running on 8080");
    };
    Relation.prototype.connect = function () {
        var _this = this;
        typeorm_1.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "varaprasad",
            database: "TORM",
            entities: [
                __dirname + "/entity/*.*",
            ],
            autoSchemaSync: true,
        }).then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
            var owner, vehicle, vehicle1, vehicle2, child, pin, website, website1, website2, tutorial, ownerrepository, carrepository, studentrepository, pinrepository, websiterepository, topicrepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        owner = new Accountone_1.Accountone();
                        owner.name = "hari";
                        owner.lastname = "prasad.G";
                        owner.phone = 878;
                        vehicle = new Car_1.Car();
                        vehicle.name = "Maruti";
                        vehicle.carno = 5018;
                        vehicle.owner = owner;
                        vehicle1 = new Car_1.Car();
                        vehicle1.name = "Bentley";
                        vehicle1.carno = 5018;
                        vehicle1.owner = owner;
                        vehicle2 = new Car_1.Car();
                        vehicle2.name = "audi";
                        vehicle2.carno = 5018;
                        vehicle2.owner = owner;
                        child = new Student_1.Student();
                        child.name = "Mahesh ";
                        child.lastname = "M";
                        child.phone = 543;
                        pin = new Pinno_1.Pinno();
                        pin.rollno = 5019;
                        pin.student = child;
                        website = new Websites_1.Websites();
                        website.weburl = "www.digital-lync.com";
                        website.websitename = "Digital-Lync";
                        website.topic = [tutorial];
                        website1 = new Websites_1.Websites();
                        website1.weburl = "www.digital-lync.com";
                        website1.websitename = "Digital-Lync";
                        website1.topic = [tutorial1];
                        website2 = new Websites_1.Websites();
                        website1.weburl = "www.digital-lync.com";
                        website1.websitename = "Digital-Lync";
                        website1.topic = [tutorial1];
                        tutorial = new Topic_1.Topic();
                        tutorial.topicname = "MEAN stack";
                        tutorial.website = [website];
                        ownerrepository = connection.getRepository(Accountone_1.Accountone);
                        carrepository = connection.getRepository(Car_1.Car);
                        studentrepository = connection.getRepository(Student_1.Student);
                        pinrepository = connection.getRepository(Pinno_1.Pinno);
                        websiterepository = connection.getRepository(Websites_1.Websites);
                        topicrepository = connection.getRepository(Topic_1.Topic);
                        return [4 /*yield*/, carrepository.save(vehicle)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, carrepository.save(vehicle1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, ownerrepository.save(owner)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, studentrepository.save(child)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, pinrepository.save(pin)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, websiterepository.save(website)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, topicrepository.save(tutorial)];
                    case 7:
                        _a.sent();
                        console.log("data saved successfully");
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (error) { return console.log(error); });
    };
    return Relation;
}());
exports.Relation = Relation;
new Relation();
//# sourceMappingURL=index.js.map