({
    handleClick : function(component, event, helper) {
        var fname = component.find("fname").get("v.value");
        var lname = component.find("lname").get("v.value");
        var email = component.find("email").get("v.value");
        var phone = component.find("phone").get("v.value");
        var fullname = fname+' '+lname;
        var bool = true;
        component.set('v.name',fullname);
        component.set('v.email',email);
        component.set('v.phone',phone);
        component.set('v.showDetails',bool);
    }
})