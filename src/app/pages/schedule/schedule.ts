import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ColetasOptions } from '../../interfaces/coletas-options';

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
    if (window.localStorage.getItem('Coletas') == null) {
      window.localStorage.setItem('Coletas', JSON.stringify(this.valorTemp));
    }
  }

  onRegister(form: NgForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'});

    const options = { headers: headers };

    if (form.valid) {

      const tester: String = window.localStorage.getItem('Coletas');
      if (tester !== 'undefined') {
        this.valorTemp = JSON.parse(window.localStorage.getItem('Coletas'));
      }

      this.valorTemp.push(this.coletas);
      window.localStorage.removeItem('Coletas');
      window.localStorage.setItem('Coletas', JSON.stringify(this.valorTemp));
      this.router.navigateByUrl('/app/tabs/about');
    }
  }
}
