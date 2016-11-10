import { NgModule }            from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { WikipediaComponent }    from './wikipedia.component';


const routes: Routes = [
  { path: '',
    component: WikipediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikipediaRoutingModule {}