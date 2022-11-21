var departmemts = ["Produce", "Bread","Dairy","Meat", "Seafood", "Drinks", "Deli", "Frozen"];
var onSale = ["Dairy", "Bread", "Meat", "Drinks", "Frozen"];


const myDepartments = () => {
    for(var heading of departmemts) {
        document.body.innerHTML += "<section class='" + heading + "'><h2>" + heading + "</h2><p>Weekly Ad</p></section>";
        
        if(!onSale.includes(heading)){
            document.querySelector("."+heading).classList.add("hide");
    }
}
}

myDepartments();