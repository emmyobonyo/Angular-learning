import { Component, EventEmitter, Input, Output } from '@angular/core'

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
        <!-- Input elements -->
        <input #myInput type="text">
        <button (click)="logMessage(myInput)">Log</button>
        <!-- Two way binding: Update the value of a property and at the sametime display the value of the property -->
        <input [(ngModel)]="newName" type="text">
        {{ newName }}
        <!-- Structural Directives -->
        <!-- ngIf takes a boolean value -->
        <h2 *ngIf="displayName; else elseBlock">
            Codevolution
        </h2>
        <ng-template #elseBlock>
            <h2>
                Name is hidden
            </h2>
        </ng-template>
        <ng-template #thenBlock>
            <h2>Codevolution</h2>
        </ng-template>
        <ng-template #elseyBlock>
            <h2>HireJuniorDevelopers</h2>
        </ng-template>
        <h2 *ngIf="displayName; then thenBlock; else elseyBlock"></h2>
        <!-- ngSwicth -->
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">You picked the color red</div>
            <div *ngSwitchCase="'blue'">You picked the color blue</div>
            <div *ngSwitchCase="'green'">You picked the color red</div>
            <div *ngSwitchDefault>Pick again</div>
        </div>
        <!-- ngFor -->
        <div *ngFor="let color of colors; index as i">
            <h2>{{ i }} {{ color }}</h2>
        </div> 
        <!-- Component Interation -->
        <h2>{{ "Hello " + parentData }}</h2>
        <button (click)="fireEvent()">Send Events</button>
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
    // Get data from the parent data
    // @Input('parentData') public name:any; <---- giving it a unique name
    @Input() public parentData: any
    // Send data to a parent component
    @Output() public childEvent = new EventEmitter()

    public colors = ["red", "blue", "green", "yellow"]
    public color = 'red'
    public displayName = false
    public newName = ''
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

    logMessage(value: any) {
        console.log(value)
    }
    fireEvent(){
        this.childEvent.emit('Hey Codevolution')
    }
}