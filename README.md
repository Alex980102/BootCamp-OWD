# BootCamp Optimization of Water Distribution

## First things first, create a file for environment variables inside the root directory `BootCamp-OWD/README.md`

```
touch README.md
```
Then enter into the file `BootCamp-OWD/README.md` the server port, the mongodb uri and a secret key for the json web token, with the following structure
```
PORT=<ENTER THE PORT>
DB_CNN=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
JWT_SECRET=<your secret string for jwt>
```
Then, run the following command to import the project dependencies.
```
npm install
```
