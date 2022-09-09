
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ClientResponse } from 'src/app/shared/model/clientResponse.model';
import { ClientService } from 'src/app/shared/service/client.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  clientList!: any;
  constructor(private clientService: ClientService) {

  }
  
  ngOnInit(): void {
    
    this.clientList = this.clientService.getClients().subscribe(client => {
      this.dataSource.data = client as ClientResponse[]
    });
    console.log(this.clientList)
    
  }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento'];
  dataSource = new MatTableDataSource(this.clientList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientList = filterValue;
    console.log(this.clientList)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
