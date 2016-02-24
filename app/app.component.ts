import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	styleUrls:['app/app.css'],
	directives:  [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent implements OnInit{

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    public title = 'Tour of Heroes';
    public heroes : Hero[];
    public selectedHero: Hero;

    onSelect(hero: Hero):void { this.selectedHero = hero; }

    getHeroes(): void {
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
}


