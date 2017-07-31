import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Member } from 'app/model/member';
import { AuthenService } from 'app/login/authen.service';

const MEMBERS: Member[] = [
      { id: 0,  name: 'Zero' },
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];

@Injectable()
export class MemberService {
    private membersUrl = 'http://localhost:8080/api/members';
    constructor(private http: Http, private authenService: AuthenService) { }

    getMembers(): Promise<Member[]> {
        return this.http.get(this.membersUrl)
              .toPromise()
              .then(response => response.json() as Member[])
              .catch(this.handleError);
    }
    
    getMembersPro(): Member[]{
        return MEMBERS;
    }

    getMembersSlowly(): Promise<Member[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getMembers()), 2000);
        });
    }

    // getMember(id: number): Promise<Member> {
    //     const url = this.membersUrl + '/' + id;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as Member)
    //         .catch(this.handleError);
    //     };
    
    private headers = new Headers({'Content-Type': 'application/json',
                                   'Authorization': 'Bearer ' + this.authenService.getToken()});

    // update(member: Member): Promise<Member> {
    //     const url = this.membersUrl + '/' +  member.id;
    //     return this.http
    //         .put(url, JSON.stringify(member), {headers: this.headers})
    //         .toPromise()
    //         .then(() => member)
    //         .catch(this.handleError);
    // }
        
    create(name: string): Promise<Member> {
        return this.http
            .post(this.membersUrl + "?name=" + name, JSON.stringify({"name": name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Member)
            .catch(this.handleError);
    }

    // delete(id: number): Promise<void> {
    //     const url = `${this.membersUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    // search(term: string): Observable<Member[]> {
    //     return this.http
    //             .get('api/members/?name=${term}')
    //             .map(response => response.json().data as Member[]);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}