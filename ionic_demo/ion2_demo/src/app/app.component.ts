import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, VideoPlayer } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage = TabsPage;
    test = "test";
    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            // Playing a video.
            VideoPlayer
                .play("http://vjs.zencdn.net/v/oceans.mp4")
                .then(() => {
                    console.log('video completed');
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }
}
