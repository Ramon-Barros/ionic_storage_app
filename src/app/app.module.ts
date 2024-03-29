import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';

import { StorageProvider } from '../providers/storage/storage';
import { ToastProvider } from '../providers/toast/toast';

import { HomePage } from '../pages/home/home';
import { EditPage } from '../pages/edit/edit';
import { CreatePage } from '../pages/create/create';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditPage,
    CreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      storeName: 'contacts'
    }),
    FormsModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditPage,
    CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    ToastProvider
  ]
})
export class AppModule {}
