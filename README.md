# simpleIonicMusicPlayer
Simple music app built using Ionic and Capacitor

## Techs
This project applies the following:
* Ionic - @ionic/angular 5.2.3
* Capacitor -  @capacitor/core : 2.2.1
* Angular 9
* Cordova 9
* Customized splash screen with cordova-res

## Usage
#### How to run:
```shell script
npm install
ionic build
npx cap add ios
npx cap sync
npx cap copy
ionic cordova resources ios
cordova-res ios --skip-config --copy
npx cap open ios
```

License
----
MIT
