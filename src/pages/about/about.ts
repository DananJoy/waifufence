import { Component } from '@angular/core';
import { Geofence } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad ActivePage');
    }

    removeFence() {
      Geofence.removeAll();
      this.navCtrl.push(HomePage);
    }

}
