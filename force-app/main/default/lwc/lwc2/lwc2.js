/**
 * @description       : 
 * @author            : ajm
 * @group             : 
 * @last modified on  : 01-30-2023
 * @last modified by  : ajm
**/
import { LightningElement, track } from 'lwc';

export default class Lwc2 extends LightningElement {
    @track greeting = "World"
    changeHandler(event){
        this.greeting = greeting.target.value;
    }
}