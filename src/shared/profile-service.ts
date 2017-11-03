import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()

export class ProfileService {

	repos: any;

	constructor(public http: HttpClient) {

  }

	public getRepos(profile){
		return new Observable((o: Observer<any>) => {
			this.http.get('https://api.github.com/users/'+profile+'/repos').subscribe((repos: any[]) => {
					this.repos = repos;
					o.next(this.repos);
					return o.complete();
			});
		});

  }

}