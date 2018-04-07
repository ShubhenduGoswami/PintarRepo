public Class UserRegistration_Request{
       
        public string userName;
        public String name;
        public string userType;
        public ContactDetails contactDetails;
            
       public class ContactDetails{
            public string phone;
            public string email;
        }
   
       public static UserRegistration_Request  jsonDeserialize(String JSON){
           return (UserRegistration_Request)System.JSON.deserialize(JSON,UserRegistration_Request.class); 
       }    
   
 }