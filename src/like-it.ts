import {NgFor, Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: 'like-it'
})
@View({
    template: `
        <img (click)="clickIt()" src="./googleLike.jpeg" width="200px" />
    `
})
export default class LikeIt {
    count:number = 0;

    clickIt() {
        this.count++;
    }
}
