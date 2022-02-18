import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  public get_api_url() {
      return environment.apiUrl
  }
}