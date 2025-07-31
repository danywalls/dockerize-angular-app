import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";



@Injectable({ providedIn: 'root' })
export class EnvironmentConfigService {
  private http = inject(HttpClient)
  private env : Record<string, string> = {
    API_URL: ''
  };

  load() {
    return this.http.get<Record<string, string>>('/assets/env.json').pipe(
      tap(data => {
        this.env = data;
        if (!this.env?.["API_URL"]) {
          console.warn('⚠️ Warning: API_URL is not defined in env.json');
        }
      })
    )
  }

  get(key: string): string {
    return this.env?.[key];
  }
}
