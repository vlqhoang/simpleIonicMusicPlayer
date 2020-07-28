
export class MusicPlayerObject {
    song_cover_img_path: string; // path to cover image
    song_title: string; // name of the song
    song_src_path: string;
    singer_name: string; // name of the singer


    constructor(song_img_path: string = '', song_title: string = '',
                song_src_path: string = '', singer_name: string = '') {
        this.song_cover_img_path = song_img_path;
        this.song_title = song_title;
        this.song_src_path = song_src_path;
        this.singer_name = singer_name;
    }
}

    //
    // { url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
    //     name: 'Perfect by Ed Sheeran'
    // },
    // {
    //     url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
    //     name: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan'
    // },
    // { url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
    //     name: 'Penny Lane by The Beatles'
    // }
