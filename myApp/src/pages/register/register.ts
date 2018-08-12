import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BsaeUI } from '../../common/baseui';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BsaeUI {
  phone: any;
  nickName: any;
  password: any;
  enterPassword: any;
  errorMessage: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loading: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
  ) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  /**
   *关闭自己的页面方法
   *
   * @memberof LoginPage
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }

  registe() {
    //前台验证,
    //验证国内手机号码,
    if (!(/^1[375678]\d{9}$/.test(this.phone))) {
      super.showToast(this.toastCtrl, "你的的手机号码格式不正确！");
    } else if (this.nickName.length < 3 || this.nickName.length > 10) {
      super.showToast(this.toastCtrl, "昵称的长度长度应该在3~10位！")
    } else if (this.password.length < 6 || this.password.length > 20) {
      super.showToast(this.toastCtrl, "密码的长度应该在6~20位！")
    } else if (this.password !== this.enterPassword) {
      super.showToast(this.toastCtrl, "两次输入的密码不一样！")
    } else {
      var loading = super.showLoading(this.loading, '注册中...');
      this.rest.register(this.phone, this.nickName, this.password).subscribe(
        f => {
          let a = eval("(" + f + ")");
          if (a['Status'] == "OK") {
            loading.dismiss();
            this.showToast(this.toastCtrl, '注册成功！');
            this.dismiss();
          } else {
            this.dismiss();
            super.showToast(this.toastCtrl, a['StatusContent']);
          }
        },
        error => this.errorMessage = <any>error);
    }
  }
  pushLogin() {
    this.navCtrl.pop();//这个页面时push过来的  要用pop回到原来的页面
  }

}
