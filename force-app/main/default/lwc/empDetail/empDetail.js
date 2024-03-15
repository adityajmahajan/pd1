import { LightningElement,api } from 'lwc';

export default class EmpDetail extends LightningElement {
    @api empDet = {empName:'Aditya',EmpAddress:'Bhagyanagar'};
}