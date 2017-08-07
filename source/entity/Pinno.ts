import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Student} from "./Student";

@Entity()
export class Pinno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    rollno: number;

    @OneToOne(type => Student, student => student.pinno,{
        cascadeInsert:true,
        cascadeUpdate:true
    })
    @JoinColumn()
    student: Student;

}