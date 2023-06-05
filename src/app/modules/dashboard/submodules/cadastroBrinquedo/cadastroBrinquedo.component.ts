import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/lib/login/auth.service';
import { NotificationService } from '../../lib/notification-service';
type Desenvolvimento = {
  id_area: number
  descricao: string
}

type classificacao = {
  id_classificacao: number
  Descricao: string
}
@Component({
  selector: 'app-estoque',
  templateUrl: './cadastroBrinquedo.component.html',
  styleUrls: ['./cadastroBrinquedo.component.css'],
})
export class cadastroBrinquedoComponent implements OnInit {
  routePath!: string;

  constructor(private authService: AuthService, private route: Router, private http: HttpClient, private notifyService: NotificationService, private router: Router){
    this.routePath = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routePath = event.url;
        console.log(this.routePath)
      }
    });
    
  }
  target:any;
navigateTo(value: any) {
  if (value) {
    this.router.navigate([value]);
    console.log(value)
}
return false;
}
  token: string = ""

  DESENVOLVIMENTO: any[] = []
  CLASSIFICACAO: any[] = []
  @Input() btnText!: string


  momentform!: FormGroup
  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token')
    let tok = this.authService.getDecodedAccessToken(token)
    this.token = tok

    this.momentform =  new FormGroup({
      descricao: new FormControl('', [Validators.required]),
      idademin: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      idademax: new FormControl('', [Validators.required]),
      referencia: new FormControl('', [Validators.required]),
      formaDeEntrada: new FormControl('', [Validators.required]),
      id_area: new FormControl('', [Validators.required]),
      id_classificacao: new FormControl('', [Validators.required])


    })
    

    this.areaDeDesenvolvimento()
    this.classificacao()
    
  }

  areaDeDesenvolvimento(): void {
    this.http.get('http://localhost:3000/desenvolvimento').subscribe((res: any) => {
       res.forEach((element: any) => {
          const ele = element.id_area
          const int: any = Math.floor(ele)

          const teste: Desenvolvimento = {
            id_area: int,
            descricao: element.descricao
          }
          this.DESENVOLVIMENTO.push(teste)
          console.log(this.DESENVOLVIMENTO)
       });
    })

  }
  classificacao(): void {
    this.http.get('http://localhost:3000/classificacao').subscribe((res: any) => {
      res.forEach((element: any) => {
          const ele = element.id_classificacao
          const int: any = Math.floor(ele)

          const teste: classificacao = {
            id_classificacao: int,
            Descricao: element.Descricao
          }
          this.CLASSIFICACAO.push(teste)
      });
    })
  }

showToasterSuccess() {
    this.notifyService.showSuccess('Criado com sucesso', 'Sucesso!');
  }

  showToasterFail() {
    this.notifyService.showFail('Criado com erro', 'teste');
  }
  cadastroBrinquedo(): void{
    this.http.post('http://localhost:3000/criar/produto', this.momentform.value).subscribe({next: (res: any) => {
      this.showToasterSuccess()
      this.momentform.reset()
    }, error:(res: any) =>{
      this.showToasterFail()
      console.log(res)
    }})
  }

  onsubmit(){
    this.cadastroBrinquedo()
  }
}
