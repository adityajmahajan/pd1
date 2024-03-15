import { LightningElement } from 'lwc';

export default class July14 extends LightningElement {

    firstno = 0;
    secondno = 0;
    theResult = 0;

    HandleNumberChange(event){
        
        if(event.target.name == 'firstnumber'){
            this.firstno = parseInt(event.target.value);
        }
        if(event.target.name == 'secondnumber'){
            this.secondno = parseInt(event.target.value);
        }
        
        //this.theResult = this.firstno + this.secondno;
    }
    handleClick(event){
        if(event.target.label=='Addition'){
            this.theResult = this.firstno + this.secondno;
        }
        if(event.target.label=='Subtraction'){
            this.theResult = this.firstno - this.secondno;
        }
        if(event.target.label=='Multiplication'){
            this.theResult = this.firstno * this.secondno;
        }
    }
}