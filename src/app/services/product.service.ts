import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ProductInfo} from '../models/productInfo';
import {apiUrl} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = `${apiUrl}/product`;
    private categoryUrl = `${apiUrl}/category`;

    constructor(private http: HttpClient) {
    }

    getAllInPage(): Observable<ProductInfo[]> {
        const url = `${apiUrl}/all`;
        return this.http.get<ProductInfo[]>(url);
    }

    create(product: ProductInfo): Observable<ProductInfo> {
        const url = `${apiUrl}/add`;
        return this.http.post<ProductInfo>(url, product);
    }

    delete(name: string): Observable<any> {
        const url = `${apiUrl}/delete/{name}`;
        const formattedUrl = url.replace('{name}', name);
        return this.http.delete(formattedUrl);
    }


    getCategoryInPage(categoryType: number, page: number, size: number): Observable<any> {
        const url = `${this.categoryUrl}/${categoryType}?page=${page}&size=${size}`;
        return this.http.get(url).pipe(
            // tap(data => console.log(data))
        );
    }

    getDetail(name: string): Observable<ProductInfo> {
        const url = `${apiUrl}/product/search/{name}`;
        const formattedUrl = url.replace('{name}', name);
        return this.http.get<ProductInfo>(formattedUrl);
    }

    update(product: ProductInfo): Observable<ProductInfo> {
        const url = `${apiUrl}/update/{name}`;
        const formattedUrl = url.replace('{name}', product.name);
        return this.http.post<ProductInfo>(formattedUrl, product.status);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
