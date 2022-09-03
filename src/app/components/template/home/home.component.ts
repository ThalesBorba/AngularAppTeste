import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/credenciais';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  creds: Credenciais = {
    nome: '',
    cpf: '',
    dataNascimento: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  cpf: FormControl = new FormControl(null, Validators.required);
  dataNascimento = new FormControl('', [Validators.minLength(10)])

  constructor() { }

  ngOnInit(): void {
  }

  errorValidNome() {
    if(this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!'
    }
    return false;
  }

  errorValidCpf() {
    if(this.cpf.invalid) {
      return 'O cpf deve ter 14 caracteres!'
    }
    return false;
  }

  
  errorValidNascimento() {
    if(this.dataNascimento.invalid) {
      return 'A data de nascimento deve ser preenchida'
    }
    return false;
  }


}