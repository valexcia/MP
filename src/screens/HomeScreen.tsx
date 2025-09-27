import React from 'react';
import SearchBar from '../components/SearchBar';
import SongList from '../components/SongList';

const HomeScreen: React.FC = () => {
    return (
        <div>
            <h1>Music Streaming App</h1>
            <SearchBar />
            <SongList />
        </div>
    );
};

export default HomeScreen;