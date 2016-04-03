import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {AllCapsPipe} from './all-caps.pipe';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.html',
    styleUrls: ['app/hero-detail.css'],
    inputs: ['hero'],
    pipes: [AllCapsPipe]
})
export class HeroDetailComponent implements OnInit {

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    public hero:Hero;
    public embedded = true;

    ngOnInit() {
        let id = +this._routeParams.get('id');
        if (id) {
            this.embedded = false;
            this._heroService.getHero(id).then(hero => this.hero = hero);
        }
    }

    goBack() {
        window.history.back();
    }
}