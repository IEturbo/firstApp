import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  ToastController,
  ViewController
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { BsaeUI } from "../../common/baseui";
import { RestProvider } from "../../providers/rest/rest";
import { HeadfacePage} from "../headface/headface";
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-user",
  templateUrl: "user.html"
})
export class UserPage extends BsaeUI {
  headface: string;
  userNickName: string = "加载中。。。";
  errorMessage:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public modalCtrl: ModalController,
    public locadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public rest: RestProvider,
    public storage: Storage
  ) {
    super();
  }

  ionViewDidLoad() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get("UserId").then(val => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.locadingCtrl, "加载中...");
        this.rest.getUserinfo(val).subscribe(
          (f: any) => {
          if (f["Status"] == "OK") {
            this.userNickName = f["UserNickName"];
            this.headface = f["UserHeadface"] + "?" + new Date().valueOf();
            loading.dismiss();
          } else {
            loading.dismiss();
            super.showToast(this.toastCtrl, f["StatusContent"]);
          }
        },
        error => this.errorMessage = <any>error);
      } else {
      }
    });
  }
  updateUserNickName(){
    this.storage.get('UserId').then((val)=>{
      if(val!=null){
        var loading=super.showLoading(this.locadingCtrl,'修改中...');
        this.rest.updateUserNickName(val,this.userNickName).subscribe((f:any)=>{
          if(f['Status'] == "OK"){
            loading.dismiss();
            super.showToast(this.toastCtrl,"昵称修改成功。")
          }else{
            loading.dismiss();
            super.showToast(this.toastCtrl,f['StatusContent']);
          }
        },
        error => this.errorMessage = <any>error);
      }
    })
  }
  logOut(){
    this.storage.remove("UserId");
    this.viewCtrl.dismiss();
  }
  gotoHeadface(){
    this.navCtrl.push(HeadfacePage);
  }
}
