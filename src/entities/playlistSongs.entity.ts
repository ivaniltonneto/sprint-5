import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { Playlist } from './playlist.entity'
import { Song } from './song.entity'

@Entity('playlist_songs')
class PlaylistSong {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Playlist)
    playlist: Playlist

    @ManyToOne(() => Song)
    song: Song

}

export { PlaylistSong }