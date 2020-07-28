import {ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Media, MediaObject} from '@ionic-native/media/ngx';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-music-player-dialog',
  templateUrl: './music-player-dialog.component.html',
  styleUrls: ['./music-player-dialog.component.scss'],
})
export class MusicPlayerDialogComponent implements OnInit {

  // Music data - expected from parent components
  @Input() song_cover_img_path: string = '';
  @Input() song_title: string = '';
  @Input() song_src_path: string = '';
  @Input() singer_name: string = '';


  duration: any = -1; // set to -1 for init state -> showing --:--
  position: any = 0; // position of the song, biding ion-range
  display_position: any = '00:00';
  display_duration: any = '00:00';

  playingFile: MediaObject;
  is_playing: boolean = false;
  is_ready: boolean = false;

  checker: number = 0;
  checkerInterval;
  positionInterval;

  constructor(private modalCtrl: ModalController,
              private media: Media,
              private fb: FormBuilder,
              private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.song_src_path.trim() == '') return;
    this.prepareAudioFileAndGetDuration();
  }

  prepareAudioFileAndGetDuration() {
    // creating a tmp playing file and get the duration - bypassing error getDuration() -> -1
    const playingFile = this.media.create(this.song_src_path);
    playingFile.play();
    playingFile.setVolume(0.0);
    playingFile.onStatusUpdate.subscribe(status => {
      if (playingFile.getDuration() > 0) {
        setTimeout(() => {
          this.duration = playingFile.getDuration();
          this.display_duration = this.toHHMMSS(this.duration);
          this.is_ready = true;
          this.changeDetection.detectChanges();

          // release tmp file
          playingFile.release();
          this.setToPlayback();
        }, 1000);
      }
    });
  }

  setToPlayback() {
    this.playingFile = this.media.create(this.song_src_path);
    this.getAndSetCurrentAudioPosition();
  }

  /**
   * Emit rapidly and adjust position and display position when playing music
   */
  getAndSetCurrentAudioPosition() {
    this.positionInterval = setInterval(() => {
      this.playingFile.getCurrentPosition().then(position => {
        if (position >= 0) {
          this.position = position;
          this.display_position = this.toHHMMSS(position);
        }
      })
    }, 500)
  }

  onSliderChanged() {
    this.playingFile.seekTo(this.position * 1000);
  }

  play() {
    this.playingFile.play();
    this.is_playing = true;
  }

  pause() {
    this.playingFile.pause();
    this.is_playing = false;
  }

  toHHMMSS(secs) {
    let sec_num = parseInt(secs, 10)
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60

    return [minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i >= 0)
        .join(":")
  }

  check() {
    this.checkerInterval = setInterval(() => {
      this.checker = 1;
    }, 500)
  }

  dismissModal() {
    this.stop();
    this.modalCtrl.dismiss();
  }

  stop() {
    this.playingFile.stop();
    this.playingFile.release();
    clearInterval(this.positionInterval);
    clearInterval(this.checkerInterval);
    this.position = 0;
    this.checker = 0;
  }
}
