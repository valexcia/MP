import React from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player';
import YouTubeService from '../services/YouTubeService';
import { Song } from '../types';

const SongScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [song, setSong] = React.useState<Song | null>(null);

    React.useEffect(() => {
        const fetchSong = async () => {
            if (id) {
                const fetchedSong = await YouTubeService.getSongById(id);
                setSong(fetchedSong);
            }
        };
        fetchSong();
    }, [id]);

    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{song.title}</h1>
            <Player song={song} />
        </div>
    );
};

export default SongScreen;