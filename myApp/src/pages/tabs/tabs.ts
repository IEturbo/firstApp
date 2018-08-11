import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { DiscoveryPage } from '../discovery/discovery';
import { HomePage } from '../home/home';
import { NoticePage } from '../notice/notice';
import { MorePage } from '../more/more';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabDiscovery = DiscoveryPage;
  tabChat = ChatPage;
  tabNotice = NoticePage;
  tabMore = MorePage;

  constructor() {

  }
}
