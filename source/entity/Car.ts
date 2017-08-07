import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {Accountone} from "./Accountone";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column("int")
    carno: number;

   @ManyToOne(type => Accountone, owner => owner.carh,{
       cascadeInsert:true
   })
   @JoinColumn()
    owner: Accountone;

}