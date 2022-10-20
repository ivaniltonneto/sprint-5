import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { PlaylistSong } from './playlistSongs.entity'
import { User } from './user.entity'

@Entity('playlists')
class Playlist {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User)//Muitas Playlists, tem um usuario
    user: User

    @OneToMany(() => PlaylistSong, playlistSong => playlistSong.playlist)//O primeiro parametro indica a intity que vai se relacionar e o segundo qual o campo
    playlistSong: PlaylistSong[]

}

export { Playlist }