import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'allCaps' })
export class AllCapsPipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase();
    }
}