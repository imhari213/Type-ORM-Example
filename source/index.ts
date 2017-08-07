import "reflect-metadata";
import {createConnection} from "typeorm";
import {Accountone} from "./entity/Accountone"
import {Student} from "./entity/Student"
import {Pinno} from "./entity/Pinno"
import {Car} from "./entity/Car"
import {Websites} from "./entity/Websites"
import {Topic} from "./entity/Topic"
import * as http from "http";

export class Relation{

constructor(){
    this.server();
    this.connect();

}

server(){

     http.createServer(function (request, response) {
        response.end("hello world");
        }).listen(8080,'127.0.0.1');
        console.log("hai...!!! server is running on 8080");

}
connect(){
    createConnection({
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
    }).then(async connection => {
   
    let owner = new Accountone();
    owner.name = "hari";
    owner.lastname = "prasad.G";
    owner.phone = 878;

    let vehicle = new Car();
    vehicle.name = "Maruti";
    vehicle.carno = 5018;
    vehicle.owner=owner;

    let vehicle1 = new Car();
    vehicle1.name = "Bentley";
    vehicle1.carno = 5018;
    vehicle1.owner=owner;

    let vehicle2 = new Car();
    vehicle2.name = "audi";
    vehicle2.carno = 5018;
    vehicle2.owner=owner;

    let child = new Student();
    child.name = "Mahesh ";
    child.lastname = "M";
    child.phone = 543;

    let pin = new Pinno();
    pin.rollno = 5019;
    pin.student = child;

    let website = new Websites();
    website.weburl = "www.digital-lync.com";
    website.websitename = "Digital-Lync";
    website.topic = [tutorial];

     let website1 = new Websites();
    website1.weburl = "www.digital-lync.com";
    website1.websitename = "Digital-Lync";
    website1.topic = [tutorial1];

     let website2 = new Websites();
    website1.weburl = "www.digital-lync.com";
    website1.websitename = "Digital-Lync";
    website1.topic = [tutorial1];

    var tutorial = new Topic();
    tutorial.topicname = "MEAN stack";
    tutorial.website = [website];

    var tutorial1 = new Topic();
    tutorial1.topicname = "MEAN stack";
    tutorial1.website = [website1];



    let ownerrepository = connection.getRepository(Accountone);
    let carrepository = connection.getRepository(Car);
    let studentrepository = connection.getRepository(Student);
    let pinrepository = connection.getRepository(Pinno);  
    let websiterepository = connection.getRepository(Websites);  
    let topicrepository = connection.getRepository(Topic);  
    
    await carrepository.save(vehicle);
    await carrepository.save(vehicle1);
    await ownerrepository.save(owner);
    await studentrepository.save(child);
    await pinrepository.save(pin);
    await websiterepository.save(website);
    await topicrepository.save(tutorial);
   console.log("data saved successfully");
    
    
    }).catch(error => console.log(error));
    

}

}

new Relation();