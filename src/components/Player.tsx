import React, { useState, useEffect } from 'react';

const Player = ({ currentSong, isPlaying, onPlay, onPause, onSkip }) => {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (currentSong) {
            const newAudio = new Audio(currentSong.url);
            setAudio(newAudio);
            if (isPlaying) {
                newAudio.play();
            }
            return () => {
                newAudio.pause();
                newAudio.src = '';
            };
        }
    }, [currentSong, isPlaying]);

    useEffect(() => {
        if (audio) {
            isPlaying ? audio.play() : audio.pause();
        }
    }, [isPlaying, audio]);

    const handleSkip = () => {
        onSkip();
    };

    return (
        <div>
            <h2>Now Playing: {currentSong ? currentSong.title : 'Select a song'}</h2>
            <button onClick={isPlaying ? onPause : onPlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={handleSkip}>Skip</button>
        </div>
    );
};

export default Player;