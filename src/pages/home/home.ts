import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable, Observer } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ProfileService } from '../../shared/profile-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	profile: string;
	repos: any = [];
	

  constructor(public navCtrl: NavController, public http: HttpClient, public profileService: ProfileService) {

  }

  public show(){
  	this.profileService.getRepos(this.profile).subscribe(repos => {
            this.repos = repos.map((repo) => {
                    return {name: repo.name, desc: repo.description};
            });

            console.log(this.repos);
        }, (err: HttpErrorResponse) => {
            alert(`Backend returned code ${err.status} with message: ${err.error}`);
        });

  }
  
}
