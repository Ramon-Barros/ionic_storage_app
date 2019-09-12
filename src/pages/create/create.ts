import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../model/contact';
import { StorageProvider } from '../../providers/storage/storage';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  contact: Contact = {
    'name': null, 
    'email': null, 
    'phone': null}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storageProvider: StorageProvider,
    private toastProvider: ToastProvider) {
  }

 createContact() {
   this.storageProvider.set('contact', this.contact)
                       .then(() => {
                         this.toastProvider.createToast('Contato criado com sucesso');
                         this.navCtrl.setRoot(HomePage);
                       })
                       .catch((error) => {
                         this.toastProvider.createToast(error);
                       });
 }

}
