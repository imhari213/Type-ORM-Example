import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import {Car} from "./Car";

@Entity()
export class Accountone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 500
    })
    name: string;

    @Column()
    lastname: string;

    @Column("int")
    phone: number;

    @OneToMany(type => Car, carh => carh.owner,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    
    carh: Car[];

}