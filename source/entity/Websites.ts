import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import {Topic} from "./Topic";

@Entity()
export class Websites {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    weburl: string;

    @Column()
    websitename: string;

    

    @ManyToMany(type => Topic, topic => topic.website,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    @JoinTable()
    topic: Topic[];

}