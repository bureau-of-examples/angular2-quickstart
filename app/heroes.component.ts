import {Component, OnInit} from 'angular2/core';
import {Router}from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-heroes',
  	templateUrl: 'app/heroes.html',
	styleUrls:['app/heroes.css'],
	directives:  [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    public title = 'Tour of Heroes';
    public heroes : Hero[];
    public selectedHero: Hero;
    public loading = true;

    onSelect(hero: Hero):void { this.selectedHero = hero; }

    getHeroes(): void {
        this._heroService.getHeroesSlowly()
        .then(heroes => {
            this.heroes = heroes;
            this.loading = false;
        });
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}