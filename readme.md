# Serendipia

### Instalation Guide
Important note: make sure you are in the main directory (/serendipia) and expo is installed.

Step 1.
Install all dependencies

`npm install`

Step 2.
Run the backend

`node back/app.js`

Step 3.
Change the conection string in functions/backinfo.js

Replace the IP constant with your own IP address (run a quick ipconfig/ifconfig to make sure)

Step 4.
Run the frontend

`npm run start`

By this point, you should have 2 terminals running

Step 5.
Open the expo app on your Android device and scan the QR Code (recommended) or run in web by typing the following address in your web browser

http://(your IP address):8081

not tested on iOS

## License

[MIT](https://choosealicense.com/licenses/mit/)