import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { CardComponent } from './layouts/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { FirstBarChartComponent } from './pages/home/first-bar-chart/first-bar-chart.component';
import { SecondBarChartComponent } from './pages/home/second-bar-chart/second-bar-chart.component';
import { SystemConfigurationComponent } from './pages/system-configuration/system-configuration.component';
import { AdministrativeEntitiesComponent } from './pages/administrative-entities/administrative-entities.component';
import { OrganizationalEntitiesComponent } from './pages/organizational-entities/organizational-entities.component';
import { FunctionalEntitiesComponent } from './pages/functional-entities/functional-entities.component';
import { ZoneComponent } from './pages/zone/zone.component';
import { RegionComponent } from './pages/region/region.component';
import { DistrictComponent } from './pages/district/district.component';
import { ShehiaComponent } from './pages/shehia/shehia.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { FacilityComponent } from './pages/facility/facility.component';
import { SubFacilityComponent } from './pages/sub-facility/sub-facility.component';
import { RoomTypeComponent } from './pages/room-type/room-type.component';
import { RoomComponent } from './pages/room/room.component';
import { ManufacturerComponent } from './pages/manufacturer/manufacturer.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { SponsorComponent } from './pages/sponsor/sponsor.component';
import { ServiceProviderComponent } from './pages/service-provider/service-provider.component';
import { ItemUserComponent } from './pages/item-user/item-user.component';
import { AssetConfigurationComponent } from './pages/asset-configuration/asset-configuration.component';
import { DefineItemsComponent } from './pages/define-items/define-items.component';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { CategoryComponent } from './pages/category/category.component';
import { StatusComponent } from './pages/status/status.component';
import { ConditionComponent } from './pages/condition/condition.component';
import { UtilizationComponent } from './pages/utilization/utilization.component';
import { ManualComponent } from './pages/manual/manual.component';
import { WorkPriorityComponent } from './pages/work-priority/work-priority.component';
import { WorkTypeComponent } from './pages/work-type/work-type.component';
import { WorkTradeComponent } from './pages/work-trade/work-trade.component';
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
import { PieChartComponent } from './pages/home/pie-chart/pie-chart.component';
import { SecondpieChartComponent } from './pages/home/secondpie-chart/secondpie-chart.component';
import { ThirdPieChartComponent } from './pages/home/third-pie-chart/third-pie-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    HomeComponent,
    FirstBarChartComponent,
    SecondBarChartComponent,
    SystemConfigurationComponent,
    AdministrativeEntitiesComponent,
    OrganizationalEntitiesComponent,
    FunctionalEntitiesComponent,
    ZoneComponent,
    RegionComponent,
    DistrictComponent,
    ShehiaComponent,
    OrganizationComponent,
    FacilityComponent,
    SubFacilityComponent,
    RoomTypeComponent,
    RoomComponent,
    ManufacturerComponent,
    VendorComponent,
    SponsorComponent,
    ServiceProviderComponent,
    ItemUserComponent,
    AssetConfigurationComponent,
    DefineItemsComponent,
    MainCategoryComponent,
    CategoryComponent,
    StatusComponent,
    ConditionComponent,
    UtilizationComponent,
    ManualComponent,
    WorkPriorityComponent,
    WorkTypeComponent,
    WorkTradeComponent,
    ManageWorkComponent,
    InventoryConfigurationComponent,
    DispensingEntityComponent,
    ProductCategoryComponent,
    ProductTypeComponent,
    ProductUnitComponent,
    ProductDefinitionComponent,
    FixedAssetComponent,
    NonFixedAssetComponent,
    OtherAssetComponent,
    AssetInStoreComponent,
    PurchaseComponent,
    SalesComponent,
    LocationComponent,
    SupplierComponent,
    CustomerComponent,
    StoreComponent,
    PieChartComponent,
    SecondpieChartComponent,
    ThirdPieChartComponent,
    // FirstPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
