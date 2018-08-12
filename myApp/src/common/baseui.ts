import { Loading, LoadingController, ToastController, Toast } from "ionic-angular";

/**
 *全局通用组件的构造函数
 *
 * @export
 * @abstract
 * @class BsaeUI
 */
export abstract class BsaeUI {
  constructor() {

  }
  /**
   *通用的loading组件
   *
   * @protected
   * @param {LoadingController} loadingCtrl
   * @param {string} message
   * @returns {Loading}
   * @memberof BsaeUI
   */
  protected showLoading(loadingCtrl: LoadingController, message: string): Loading {
    let loader = loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;

  }
  /**
   *通用的toast组件
   *
   * @protected
   * @param {ToastController} toasrCtrl
   * @param {string} message
   * @returns {Toast}
   * @memberof BsaeUI
   */
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