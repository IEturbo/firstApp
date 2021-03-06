import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { ChatPage } from '../pages/chat/chat';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { MorePage } from '../pages/more/more';
import { NoticePage } from '../pages/notice/notice';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { HeadfacePage } from '../pages/headface/headface';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    MorePage,
    NoticePage,
    DiscoveryPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//全局定义http模块
    IonicModule.forRoot(MyApp,{
      backButtonText:"返回",
    }),
    IonicStorageModule.forRoot(),//全局导入storage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    MorePage,
    NoticePage,
    DiscoveryPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
