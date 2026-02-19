import { Component, output, EventEmitter, Output, Input, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',

})

export class SearchBar {

  search = model<string>('Initial search');
  searchButtonClicked = output({alias: 'submit'});

  searchClick(){
    this.searchButtonClicked.emit();
  }
}
