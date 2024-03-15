/**
 * @description       : 
 * @author            : ajm
 * @group             : 
 * @last modified on  : 02-02-2023
 * @last modified by  : ajm
**/
import { LightningElement, track } from 'lwc';

export default class LwcEmp extends LightningElement {
    @track name;
    @track age;
    @track salary;
    @track show=true;
    nameHandler(event){
      this.name = event.target.value;
      
    }
    ageHandler(event){
      this.age = event.target.value;
    }
    salaryHandler(event){
      this.salary=event.target.value;
    }
    saveButtonHandler(){
      this.show=false;
    }
    backButtonHandler(){
      this.show=true;
    }
}