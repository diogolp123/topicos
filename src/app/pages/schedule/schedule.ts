import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { ColetasOptions } from '../../interfaces/coletas-options';
import { Router } from '@angular/router';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  coletas: ColetasOptions = { volume: '', temperatura: '' };
  valorTemp: any[] = [];
  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("Coletas") == null){
      window.localStorage.setItem("Coletas", JSON.stringify(this.valorTemp));
    }
  }

  onRegister(form: NgForm) {
  // tslint:disable-next-line:prefer-const
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});

    const options = { headers: headers };

    if (form.valid) {

      var tester: String = window.localStorage.getItem("Coletas");
      if (tester != "undefined"){
        this.valorTemp = JSON.parse(window.localStorage.getItem("Coletas"));
      }

      this.valorTemp.push(this.coletas);
      window.localStorage.removeItem("Coletas");
      window.localStorage.setItem("Coletas", JSON.stringify(this.valorTemp));

    this.http.post('https://volutech.herokuapp.com/api/coletas', this.coletas).subscribe(data => {
        this.router.navigateByUrl('/app/tabs/about');
        console.log(data);
      });
    }
  }
}
