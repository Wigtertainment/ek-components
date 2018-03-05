import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
	selector: 'ek-search-bar',
	templateUrl: './ek-search-bar.component.html',
	styleUrls: ['./ek-search-bar.component.css']
})
export class EkSearchBarComponent implements OnInit {

	constructor(private renderer2: Renderer2) { }

	ngOnInit() {
	}

	showInput: boolean = false;

	public openInput() {
		this.showInput = !this.showInput;

		setTimeout(() => {
			if (this.showInput) {
				let onElement = this.renderer2.selectRootElement('#searchInput');
				onElement.focus();
			}
		}, 0)
	}

	public onBlur() {
		setTimeout(() => {
			this.showInput = !this.showInput;
		}, 500);
	}
}
