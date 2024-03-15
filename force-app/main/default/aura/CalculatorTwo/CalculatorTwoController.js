({
    handleClick : function(component, event, helper) {
        var firstno = parseInt(component.find("fnum").get("v.value"));
        var secondno = parseInt(component.find("snum").get("v.value"));
        var result;
        if(secondno==''){
            alert('enter numbers in both text feilds');
        }else{
            var button = event.getSource().get("v.label");
            
            if(button == 'Addition'){
                result = firstno + secondno;    
            }else if(button == 'Subtraction'){
                result = firstno - secondno;
            }else{
                result = firstno * secondno;
            }
            component.set("v.myResult", result);
        }
    }
})