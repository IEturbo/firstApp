import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BsaeUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';
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
    public toastCtrl: ToastController,
    public storage: Storage) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /**
   *关闭自己的页面方法
   *
   * @memberof LoginPage
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }

  /**
   *登录方法
   *
   * @memberof LoginPage
   */
  login() {
    var loading = super.showLoading(this.loading, "登录中...");
    this.rest.login(this.phone, this.password).subscribe(
      f => {
        if (f['Status'] == 'OK') {
          // 登录成功处理
          this.storage.set('UserId', f['UserId']);
          loading.dismiss();
          this.dismiss();
        } else {
          loading.dismiss();
          super.showToast(this.toastCtrl, f["StatusContent"]);
        }
      },
      error => this.errorMessage = <any>error);
  }

  pushRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
