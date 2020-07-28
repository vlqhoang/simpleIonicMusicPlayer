import {Component, ElementRef, ViewChild} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  routerHidden: boolean = true;
  @ViewChild('my_animated_splash', {static: false}) my_animated_splash: ElementRef;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /**
       * After device ready and splash screen off, temporarily show a customized splash / icons/ img in 2s
       */
      setTimeout(() => {
        this.routerHidden = false;
      }, 3000)
    });
  }
}
