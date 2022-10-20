import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { PaymentInfo } from './paymentInfo.entity'
import { Playlist } from './playlist.entity'

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

    @Column({ default: true })
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ length: 120 })
    @Exclude()
    password: string

    @OneToOne(() => PaymentInfo /*, {eager: true} */) @JoinColumn() //eager quando true, mostrar todas as realações
    paymentInfo: PaymentInfo

    @OneToMany(() => Playlist, playlist => playlist.user)
    playlist: Playlist[]

}

export { User }