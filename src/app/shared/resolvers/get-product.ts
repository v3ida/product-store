import { inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const getProduct = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const productsService = inject(ProductsService);
    return productsService.get(route.paramMap.get('id') as string)
 }