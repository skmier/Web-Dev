import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { Albums } from './components/albums/albums';
import { AlbumDetail } from './components/album-detail/album-detail';
import { AlbumPhotos } from './components/album-photos/album-photos';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'albums', component: Albums },
    { path: 'albums/:id', component: AlbumDetail },
    { path: 'albums/:id/photos', component: AlbumPhotos },
    { path: '**', redirectTo: '/home' }
];