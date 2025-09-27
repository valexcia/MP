# Music Streaming App

## Overview
This is a music streaming application that allows users to search for and play songs available on YouTube. The app provides a user-friendly interface to browse songs, play them, and manage playback.

## Features
- Search for songs using keywords.
- Display a list of songs fetched from YouTube.
- Play, pause, and skip songs using a built-in player.
- View details of the currently playing song.

## Project Structure
```
music-streaming-app
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Player.tsx
│   │   ├── SongList.tsx
│   │   └── SearchBar.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   └── SongScreen.tsx
│   ├── services
│   │   └── YouTubeService.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd music-streaming-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the app.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.