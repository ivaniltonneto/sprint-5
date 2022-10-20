import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { PlaylistSong } from './playlistSongs.entity'

@Entity('songs')
class Song {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 45 })
    name: string

    @Column({ length: 60 })
    artist: string

    @Column({ type: 'integer' })
    duration: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => PlaylistSong, playlistSong => playlistSong.song)
    playlistSong: PlaylistSong[]

}

export { Song }