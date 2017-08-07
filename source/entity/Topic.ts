import {Entity, Column, PrimaryGeneratedColumn, ManyToMany ,JoinTable} from "typeorm";
import {Websites} from "./Websites";

@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: number;

   
   @Column({
        length: 500
    })
    topicname: string;

    

    @ManyToMany(type => Websites, website => website.topic,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    @JoinTable()
    website: Websites[];

}