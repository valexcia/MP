export interface Song {
    id: string;
    title: string;
    artist: string;
    thumbnailUrl: string;
    videoUrl: string;
}

export interface PlayerState {
    isPlaying: boolean;
    currentSong: Song | null;
    volume: number;
}