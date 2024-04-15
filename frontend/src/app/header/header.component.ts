import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logos: string[] = []; 

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const query = `
      {
        logos {
          id
          title
        }
      }
    `;

    this.httpClient.post<any>('http://localhost:8000/graphql', { query }, httpOptions)
      .subscribe(response => {
        this.logos = response.data.logos.map((logo: any) => logo.title);
      });
  }
}
