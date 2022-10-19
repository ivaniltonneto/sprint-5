import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'
import {Exclude} from 'class-transformer'
import PaymentInfo from './paymentinfo.entity'//quando vou fazer a relação oneTheOne ou mult, preciso importar a(as) entity que quero fazer essa relação

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 60, unique: true })
    email: string

    @Column()
    isAdm: boolean

    @Column({default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 120 })
    @Exclude()
    password: string

    @OneToOne(()=> PaymentInfo, {eager: true}) @JoinColumn()//eager quando true, mostrar todas as realações
    paymentinfo: PaymentInfo
}

export { User }