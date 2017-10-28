Question1Max. Marks 100.00
Problems Hub — Elegant sport programming hub!
[Problem Statement]
Develop a pseudo front-end application which would let the users help browse programming problems.

[Minimum Requirement] (entry level)
— Use of Web API to fetch problems detail.

API Parameters:
problems[] —[ name, tags, rating, solved_by, parent_challenge, url, image ].
— Visually interactive responsive design listing all the problems.
— Implement Like feature (via localstorage)
— Save source code (html, css, js) in Editor.

[Plus Point] (intermediate)
— A feature to Sort (by Rating or Like).
— Display problem details including name, image, total solved, parent challenge name, url, and url link.
— Link to HackerEarth’s problem URL. (Should open in new window | target="_blank")
— Feel free to use your favourite UI/UX frameworks and tools in design and development.

[Extra Work] (experienced / wizard)
— Display and keep track of API hits / number of total Likes.
— A feature to Like problems and maintain total links. (HTML5 Localstorage)
— Custom elegant design, fonts and icons to make web app more user-friendly.
— You may add portfolio activity comprising awesome work you have done on web application(s).
— Use your imagination and add features which would make things easier for end users.

[Guide]
— Problem details API: 
— Ideal Frontend Stack:

Any of your favourite JS Framework: Javascript, jQuery, Angular or React.
Custom CSS, Good if you can work around Stylus.
Optional: Bootstrap, Typography, Subtle pattern, Custom Icons.
— PS: Application can be built with use of client-side scripting and need not require any backend.
— HTML5 Local Storage: http://html5demos.com/storage
— For icons and subtle texture:

http://css2stylus.com/
http://glyphsearch.com/
http://subtlepatterns.com/thumbnail-view/
http://codebeautify.org/jsonviewer
http://www.flaticon.com/categories
[Wireframe MVP / Reference Structure]

App Page I — Home page comprising list of problems and relevant details.
problem_image
— API Specs (shall be accessible once event starts)

API Status: https://hackerearth.0x10.info/api/uptime

Supports GET/POST/PUT requests on HTTP as well as HTTPS.
Output Response: JSON, CSV or XML
Example urls:

https://example.com/api/problems?type=json&query=list_problems
https://example.com/api/problems?type=json&query=api_hits
HTTP Header

access-control-allow-headers: Origin, X-Requested-With, Content-Type, Accept
access-control-allow-methods: GET, POST, PUT
access-control-allow-origin: *
server: cloudflare-nginx
Structure / Data Parameters:

problems[] —[ name, tags, rating, solved_by, parent_challenge, url, image ].
