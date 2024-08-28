import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SystemConfigurationComponent } from './pages/system-configuration/system-configuration.component';
import { AdministrativeEntitiesComponent } from './pages/administrative-entities/administrative-entities.component';
import { OrganizationalEntitiesComponent } from './pages/organizational-entities/organizational-entities.component';
import { FunctionalEntitiesComponent } from './pages/functional-entities/functional-entities.component';
import { AssetConfigurationComponent } from './pages/asset-configuration/asset-configuration.component';
import { DefineItemsComponent } from './pages/define-items/define-items.component';
import { ManageWorkComponent } from './pages/manage-work/manage-work.component';
import { InventoryConfigurationComponent } from './pages/inventory-configuration/inventory-configuration.component';
import { DispensingEntityComponent } from './pages/dispensing-entity/dispensing-entity.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductTypeComponent } from './pages/product-type/product-type.component';
import { ProductUnitComponent } from './pages/product-unit/product-unit.component';
import { ProductDefinitionComponent } from './pages/product-definition/product-definition.component';
import { FixedAssetComponent } from './pages/fixed-asset/fixed-asset.component';
import { NonFixedAssetComponent } from './pages/non-fixed-asset/non-fixed-asset.component';
import { OtherAssetComponent } from './pages/other-asset/other-asset.component';
import { AssetInStoreComponent } from './pages/asset-in-store/asset-in-store.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { SalesComponent } from './pages/sales/sales.component';
import { LocationComponent } from './pages/location/location.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {path:"home",component:MainLayoutComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"system-configuration",component:SystemConfigurationComponent},
      {path:"administrative-entities",component:AdministrativeEntitiesComponent},
      {path:"organizational-entities",component:OrganizationalEntitiesComponent},
      {path:"functional-entities",component:FunctionalEntitiesComponent},
      {path:"asset-configuration",component:AssetConfigurationComponent},
      {path:"define-items",component:DefineItemsComponent},
      {path:"manage-work",component:ManageWorkComponent},
      {path:"inventory-configuration",component:InventoryConfigurationComponent},
      {path:"dispensing-entity",component:DispensingEntityComponent},
      {path:"product-category",component:ProductCategoryComponent},
      {path:"product-type",component:ProductTypeComponent},
      {path:"product-unit",component:ProductUnitComponent},
      {path:"product-definition",component:ProductDefinitionComponent},
      {path:"fixed-asset",component:FixedAssetComponent},
      {path:"non-fixed-asset",component:NonFixedAssetComponent},
      {path:"other-asset",component:OtherAssetComponent},
      {path:"asset-in-store",component:AssetInStoreComponent},
      {path:"purchase",component:PurchaseComponent},
      {path:"sales",component:SalesComponent},
      {path:"location",component:LocationComponent},
      {path:"supplier",component:SupplierComponent},
      {path:"customer",component:CustomerComponent},
      {path:"store",component:StoreComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
