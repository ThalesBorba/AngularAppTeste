import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { Client } from 'src/app/shared/model/client.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'http://localhost:3000/people?nome='
  results$!: Observable<any>;
  total!: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch() {
    
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      this.results$ = this.http.get(this.SEARCH_URL + value)
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results$)
        );
    }
  }

}
