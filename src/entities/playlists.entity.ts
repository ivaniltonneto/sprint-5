import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';


@Entity('playlist')
class Playlist {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 45})
    name: string

    @CreateDateColumn()
    createdAt: Date 

    @ManyToOne(() =>User)//Muitas Playlists, tem um usuario
    user: User
}

export default Playlist