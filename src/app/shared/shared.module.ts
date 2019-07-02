import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatGridListModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LibraryModule } from '@caiu/library';

import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { TileComponent } from './tile/tile.component';
import { CollageComponent } from './collage/collage.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContainerComponent } from './container/container.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LibraryModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    LibraryModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    CollageComponent,
    ContainerComponent,
    HeaderComponent,
    MissionComponent,
    NavbarComponent,
    SidenavComponent,
    TileComponent,
    VisionComponent,
    WallpaperComponent
  ],
  declarations: [
    CollageComponent,
    ContainerComponent,
    HeaderComponent,
    MissionComponent,
    NavbarComponent,
    SidenavComponent,
    TileComponent,
    VisionComponent,
    WallpaperComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{ provide: 'Environment', useValue: environment }]
    };
  }
}
