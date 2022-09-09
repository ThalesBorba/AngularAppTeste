
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
  constructor(public clientService: ClientService) {

  }
  
  ngOnInit(): void {
    
  }

  clients: ClientResponse[] = [];
  clientName: string = '';

  getClients() {
    this.clientService.getClientByName(this.clientName).subscribe(data => {
      this.clients = this.clients;
    })
  }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento'];
  dataSource = new MatTableDataSource(this.clients);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientName = filterValue;
    console.log(this.clientName)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
