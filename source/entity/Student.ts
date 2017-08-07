import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Pinno} from "./Pinno";

@Entity()
export class Student {

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

    @OneToOne(type => Pinno, pinno => pinno.student,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    
    pinno: Pinno;

}