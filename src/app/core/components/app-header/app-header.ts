import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-header',
    imports: [MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
    templateUrl: './app-header.html',
    styleUrl: './app-header.scss'
})
export class AppHeader {

}
