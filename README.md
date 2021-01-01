
## Music-related slot machine game 

⚠️ **Unfinished** ⚠️ 

_Uses: Spotify's API, Node/Express (backend/server) and React (frontend)_

Spotify's API doesn't accept API calls from a frontend client unless you authorize a user, which isn't otherwise required for this app, so instead I've set up a server using Express (server.js)  to make the API requests to Spotify.

The frontend is a basic form built with React.

**App functionality:**
1. Enter 3 artists' names and the app will return 3 related artists (generated at random) and each artists' most recent album
2. If you match the returned artists' names or the color of their albums, you win the game

**Still left to do:**
- Integrate API and algorithm for determining: 1) main color in an image, and 2) similarity between two colors
- Polish design
- Fix bugs
