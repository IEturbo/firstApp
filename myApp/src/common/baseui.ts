import { Loading, LoadingController, ToastController, Toast } from "ionic-angular";
export abstract class BsaeUI {
  constructor() {

  }
  protected showLoading(loadingCtrl: LoadingController, message: string): Loading {
    let loader = loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;

  }

  protected showToast(toasrCtrl:ToastController,message:string):Toast{
    let toast=toasrCtrl.create({
      message:message,
      duration:3000,
      position:'bottom',
    });
    toast.present();
    return toast;
  }
}