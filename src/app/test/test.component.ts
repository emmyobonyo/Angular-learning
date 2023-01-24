import { Component } from '@angular/core'

@Component({
    selector: 'app-test',
    template: `
        <h2>
            Welcome {{ name }}
        </h2>
        <!-- It's better to use property binding instead of string interpolation -->
        <input [id]="myId" type="text" value="Emmanuel">
        <!-- It's better to use property bindind instead of string interpolation -->
        <input [disabled]="isDisabled" [id]="myId" type="text" value="Emmanuel">
        <!-- Always use property binding -->
        <h2 [class]="successClass">Code Evolution</h2>
        <!-- A regular class attribute becomes a dummy attribute in the presence of class binding -->
        <!-- Conditional apply a single class -->
        <h2 [class.text-danger]="hasError">No Snooze</h2>
        <!-- Conditionally apply mutiple classes -->
        <h2 [ngClass]="messageClasses">Conditionally apply multiple classes</h2>
        <!-- This is an example of style binding -->
        <h2 [style.color]="'orange'">Style Binding</h2>
        <!-- Style binding with conditinals -->
        <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
        <h2 [style.color]="highlightColor">Style binding 2</h2>
        <h2 [ngStyle]="titleStyles">Style binding 3</h2>
        <!-- The $event gives you all the information about the element on which it was raised -->
        <button (click)="onClick($event)">This is a button</button>
        <h3>{{ greeting }}</h3>
        <button (click)="greeting='Welcome sir'">This is another button</button>
        <h3>{{ greeting }}</h3>
    `,
    styles:[`
        .text-success {
            color: green;
        }
        .text-danger {
            color: red
        }
        .text-special {
            font-style: italic
        }
    `]
})

export class TestComponent {
    public successClass = "text-success"
    public greeting = ""
    public hasError = true
    public isSpecial = true
    public messageClasses = {
        "text-success": !this.hasError,
        "text-danger": this.hasError,
        "text-special": this.isSpecial
    }
    public titleStyles = {
        color: "blue",
        fontStyle: "italic"
    }
    public highlightColor = 'orange'
    public name = "WH Namulonge"
    public myId = "testId"
    public isDisabled = true
    public siteUrl = window.location.href
    constructor() {

    }

    greetUser() {
        return "Hello " + this.name
    }

    onClick(event: any) {
        console.log(event)
        this.greeting = event.type
    }
}