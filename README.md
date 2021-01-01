
Unfinished music-related slot machine game using Spotify's API, Node/Express (backend/server) and React (frontend)

Spotify's API doesn't allow apps to make API calls from a frontend client unless you authorize a user, which isn't required for this app, so I've set up a server using Express (server.js)  to make the API requests to Spotify.

The frontend is a basic form built with React.

**Basic mechanics:**
1. Enter 3 artists' names and the app will return 3 related artists (generated at random) and each artists' most recent album
2. If you match the returned artists' names or the color of their albums, you win the game

**Still left to do:**
- Integrate API and algorithm for determining: 1) main color in an image, and 2) similarity between two colors
- Polish design
- Fix bugs
