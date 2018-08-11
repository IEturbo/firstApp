import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BsaeUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BsaeUI {
  phone: any;
  password: any;
  errorMessage: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loading: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  login() {
    var loading = super.showLoading(this.loading, "登录中...");
    this.rest.login(this.phone, this.password).subscribe(
      f => {
        if (f['status'] == 'OK') {
          // 登录成功处理
        } else {
          loading.dismiss();
          super.showToast(this.toastCtrl, f["statusContent"]);
        }
      },
      error => this.errorMessage = <any>error);

  }
}
