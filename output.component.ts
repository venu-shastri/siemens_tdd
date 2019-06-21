import { Component, Input } from '@angular/core';

@Component({
    selector:'out-comp',
    template:`<output>{{msg}}</output>`
})
export class OutputComponent{

    @Input()
    msg:string;

}