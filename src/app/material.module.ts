import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
    FlexLayoutModule,
    // FormsModule,
    // CdkTreeModule,
    // MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDividerModule,
    // MatExpansionModule,
    MatIconModule,
    // MatInputModule,
    MatListModule,
    // MatMenuModule,
    // MatProgressSpinnerModule,
    // MatPaginatorModule,
    // MatRippleModule,
    // MatSelectModule,
    MatSidenavModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    MatToolbarModule,
    // MatFormFieldModule,
    // MatButtonToggleModule,
    // MatTreeModule,
    // OverlayModule,
    // PortalModule
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ],
})
export class MaterialModule {
}
