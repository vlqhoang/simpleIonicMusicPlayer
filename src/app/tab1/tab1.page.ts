import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {MusicPlayerDialogComponent} from "../shared/components/music-player-dialog/music-player-dialog.component";
import {MusicPlayerObject} from "../shared/components/music-player-dialog/music-player-object";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {}

  openMusicDialog() {
    // preparing data obj then pass in to the music dialog
    let musicData = new MusicPlayerObject('assets/album_art.jpg', 'Perfect',
        'assets/songs/Perfect_Ed.mp3', 'Ed Sheeran');
    this.presentMusicPlayerDialog(musicData);
  }

  openMusicDialog2() {
    // preparing data obj then pass in to the music dialog
    let musicData = new MusicPlayerObject('assets/Ed_Avatar2.jpg', 'Shape Of You - Mashup',
        'assets/songs/Mashup_ShapeOfYou.mp3', 'Ed Sheeran');
    this.presentMusicPlayerDialog(musicData);
  }

  async presentMusicPlayerDialog(musicData: MusicPlayerObject) {
    // init music dialog
    const musicDialog = await this.modalCtrl.create({
      component: MusicPlayerDialogComponent,
      cssClass: 'full-screen-model',
      componentProps: {
        ...musicData
      }
    })
    return await musicDialog.present();
  }

}
