import { MatFormFieldModule, MatSidenavModule, MatIconModule,MatListModule, }from '@angular/material'
import{NgModule} from '@angular/core'
import{FlexLayoutModule} from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
   
    imports:[FontAwesomeModule,MatIconModule,MatSidenavModule,MatFormFieldModule,FlexLayoutModule,MatListModule],
    exports:[FontAwesomeModule,MatIconModule,MatFormFieldModule,MatSidenavModule,FlexLayoutModule,MatListModule]
  
  })
  export class MaterialModule { }
