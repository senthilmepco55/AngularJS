import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROS } from './mock-heros';

@Injectable()
export class HeroService{
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }    

    getHerosSlowly(): Promise<Hero[]> {
        return new Promise(resolve => { setTimeout(() => resolve(this.getHeros()), 7000); });
    }
}