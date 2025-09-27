import React from 'react';
import { Song } from '../types';
import './SongList.css';

interface SongListProps {
  songs: Song[];
  onSelectSong: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onSelectSong }) => {
  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => onSelectSong(song)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;