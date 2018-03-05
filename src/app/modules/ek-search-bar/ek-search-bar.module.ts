import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EkSearchBarComponent } from './ek-search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EkSearchBarComponent],
  exports: [EkSearchBarComponent]
})
export class EkSearchBarModule {}
