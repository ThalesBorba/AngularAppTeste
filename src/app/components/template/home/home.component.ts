import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/model/client.model';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public clientForm!: FormGroup;

  constructor(
    public clientService: ClientService, 
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.clientService.postClient(this.clientForm.value).subscribe((result) => {});
  }

 errorValidNome() {
    if(this.clientForm.value.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!'
    }
    return false;
  }

  errorValidCpf() {
    if(this.clientForm.value.cpf.invalid) {
      return 'O cpf deve ter 14 caracteres!'
    }
    return false;
  }

  
  errorValidNascimento() {
    if(this.clientForm.value.dataNascimento.invalid) {
      return 'A data de nascimento deve ser preenchida'
    }
    return false;
  }


}

