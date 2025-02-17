let userRole = "admin";
let accesLevel; 

if(userRole === "admin"){

    accesLevel = "Full access granted";

} else if(userRole === "manager"){

    accesLevel = "Limit access granted";

} else{

    accesLevel = "No acces granted";

}

console.log("Access level", accesLevel);

// --------------------------------------------------------
let isLoggedIn = true;
let userMessage; 

if(isLoggedIn){

    if(userRole === "Admin"){
        
        userMessage = "Hola Admin, estas logeado";

    }else{

        userMessage  = "Hola User, estas logeado";
    }

} else{

    if(userRole === "Admin"){

        userMessage = "Hola Admin, te faltó loguearte";

    }else{

        userMessage = "Hola User, te faltó loguearte";

    }

}
 // -------------------------------------------------
 let userType = "subscriber";
 let userCategory; 

 switch(userType){
     case "admin":
         userCategory = "Administrador";
         break;
     case "manager":
         userCategory = "Manager";
         break;
     case "subscriber":
         userCategory = "Subscriber";
         break; 
    default:
        userCategory = "Desconocido";

 }

 console.log(userCategory); 

 // ---------------------------------------------------------------
let isAuthenticated = false; 
let authenticationStatus = isAuthenticated ?
            "Yes":"No";

console.log("Auth Status", authenticationStatus)

// ---------------------------------------------------------------
let tipoRol  = "Employee";
let acceso; 

switch(tipoRol){
    case "Employee":
        acceso = "Auth. to have access to Dietary Service"; 
        break;
    case  "Enrolled Member":
        acceso = "Auth. to have access to Dietary Service and one on one interaction with a dietician";
        break;
    case "Subscriber":
        acceso =  "they are authorized to have partial access to facilitate 'Dietary Services' only.";
        break;
    case "Non-Subsciber": 
        acceso = " they need to enroll or at least subscribe first to avail this facility.";
        break;
    default: 
        acceso = "No encontrado";

    }

console.log("Acceso:", acceso);