import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@NgModule({
    imports:[
      MatToolbarModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatIconModule,
      MatTableModule
     
     
    ],
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatTableModule
        
       
    ],
})

export class MatModule{}