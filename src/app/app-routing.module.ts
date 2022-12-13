import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from './pages/card/card.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {AuthGuard} from "./_guards/auth.guard";
import {ProductListComponent} from "./pages/product-list/product.list.component";
import {UserDetailComponent} from "./pages/user-edit/user-detail.component";
import {ProductEditComponent} from "./pages/product-edit/product-edit.component";
import {Role} from "./enum/Role";
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SearchProductComponent } from './pages/search-product/search-product.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'category/:id', component: CardComponent},
    {path: 'product', component: CardComponent},
    {path: 'category', component: CardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'register', component: SignupComponent},
    {path: 'success', component: SignupComponent},
    {path: 'seller', redirectTo: 'seller/product', pathMatch: 'full'},
    {
        path: 'seller/product',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    {
        path: 'seller/product/add',
        component: AddProductComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    {
        path: 'profile',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller/product/edit/:name',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Manager, Role.Employee]}
    },
    {
        path: 'product/search',
        component: SearchProductComponent,
        canActivate: [AuthGuard],
        data: {roles: [Role.Customer]}
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
