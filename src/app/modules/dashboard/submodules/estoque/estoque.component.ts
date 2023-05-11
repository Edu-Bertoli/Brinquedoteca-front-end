import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/lib/login/auth.service';

type Estoque = {
  id: number;
  descricao: string;
  referencia: string;
  quantidade: number;
};

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent implements OnInit {
  POSTS: Estoque[] = [];
  ESTOQUE: any;
  page: number =1
  count: number = 0
  tablesize: number = 10
  tablesizes: any = [2,3,4,5,6,7,8]

  constructor(private authService: AuthService, private http: HttpClient) {}
  token: string = '';

  ngOnInit(): void {
    const token: any = localStorage.getItem('access_token');
    let tok = this.authService.getDecodedAccessToken(token);
    this.token = tok;
    this.postList();
  }

  postList(): void {
    this.http
      .get('http://localhost:3000/estoque')
      .subscribe((response: any) => {
        response.forEach((element: any) => {
          let referencia: string = '';

         referencia += element.Brinquedo_Estoque[0].Referencia

          const paddingleft = element.id_brinquedo.toString().padStart(4, '0')
          console.log(paddingleft)

          const estoqueItem: Estoque = {
            id: paddingleft,
            descricao: element.Descricao,
            quantidade: element.quantidade,
            referencia: referencia,
          };
          this.POSTS.push(estoqueItem);
          console.log(element);
        });
      });
  }
  ontableDataChange(event : any){
    this.page
  }
}
