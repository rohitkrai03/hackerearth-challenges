const API_URL = 'http://starlord.hackerearth.com';
const API_VERSION = '2.0';
const BASE_URL = `${API_URL}/${API_VERSION}`;

exports.getURL = url => BASE_URL + url;

module.exports = {
  appName: 'Rang De Games Arena',
  gameAPI: `${API_URL}/gamesarena`,
};
