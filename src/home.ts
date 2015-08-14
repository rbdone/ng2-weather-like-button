//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {formDirectives, Component, View, bootstrap} from "angular2/angular2";

import LikeIt from "./like-it";

@Component({
    selector: "home"
})
//@Animations("like-it-animations.json")
@View({
    directives: [formDirectives, LikeIt],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        <h1>Like it... Like it good!</h1>
        <like-it #likeit></like-it> <h1 style="font-size:128px;">{{likeit.count}}</h1>
        <like-it #bob></like-it> <h1 style="font-size:128px;">{{bob.count}}</h1>
        <button (click)="bob.clickIt()">count more</button>
    `
})
export default class Home{
    name:string = "ng-hackathon";

    onButtonClick(value){
        alert(value);
    }
}