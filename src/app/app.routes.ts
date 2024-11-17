import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getProducts } from './shared/resolvers/get-products';
import { getProduct } from './shared/resolvers/get-product';

export const routes: Routes = [
    {
        path: '',
        resolve:{
            products: getProducts
        },
        component: ListComponent
    },
    {
        path: 'create-product',
        loadComponent: () => 
            import('./features/create/create.component').then(
                (m) => m.CreateComponent
            )
    },
    {
        path: 'edit-product/:id',
        resolve:{
            product: getProduct
        },
        loadComponent: () => 
            import('./features/edit/edit.component').then(
                (m) => m.EditComponent
            )
    },
    {
        path: 'delete-product/:id',
        resolve:{
            product: getProduct
        },
        loadComponent: () => 
            import('./features/edit/edit.component').then(
                (m) => m.EditComponent
            )
    }
];
