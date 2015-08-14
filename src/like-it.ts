import {Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: 'like-it'
})
@View({
    template: `
    <div>
        <img (click)="clickIt()" src="./googleLike.jpeg" width="200px" />
        <span style="color:red;">{{count}}</span>
    </div>
    `
})
export default class LikeIt {
    count:number = 0;

    clickIt() {
        this.count++;
    }
}
