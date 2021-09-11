import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiKey } from '../config';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private apiUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;

	constructor(private http: HttpClient) {}

	getLatest(): Observable<any> {
		return this.http.get(this.apiUrl);
		// return of({ rates: [] });
	}

	/**
	 * It returns api response what will be needed to execute the currency exchange (the default value of base is EUR).
	 * @param from Currency symbol (3 character) where you want to exchange from.
	 * @param to Currency symbol (3 character) where you want to exchange to.
	 */
	getExchangeInfo(from: string, to: string): Observable<any> {
		return this.http.get(`${this.apiUrl}&symbols=${from},${to}`);
	}
}
