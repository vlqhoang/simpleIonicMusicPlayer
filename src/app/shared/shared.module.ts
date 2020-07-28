import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MusicPlayerDialogComponent} from "./components/music-player-dialog/music-player-dialog.component";
import { Media } from "@ionic-native/media/ngx";

const sharedComponents = [
    MusicPlayerDialogComponent
]

const sharedModule = [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
]

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    entryComponents: [
        MusicPlayerDialogComponent
    ],
    imports: [
        ...sharedModule
    ],
    exports: [
        ...sharedModule,
        ...sharedComponents
    ],
    providers: [
        Media
    ]
})
export class SharedModule {}