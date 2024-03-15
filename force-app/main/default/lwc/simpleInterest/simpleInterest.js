import { LightningElement } from 'lwc';

export default class SimpleInterest extends LightningElement {
    principal;
    rate;
    time;
    interest;
  
    principalChange(event) {
      this.principal = event.target.value;
    }
  
    interestChange(event) {
      this.rate = event.target.value;
    }
  
    yearsChange(event) {
      this.time = event.target.value;
    }
  
    ciCalculate() {
      this.interest = this.principal*this.time*this.rate/100;
    }
}