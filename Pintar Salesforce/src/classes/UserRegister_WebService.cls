/*  
   The urlMapping acts as an accessible endpoint and adds to the full URL used to call this webservice from an external point  
   For example, something like "https://ap1.salesforce.com/services/apexrest/Account" 
 */  
 @RestResource(urlMapping='/Register/*')  
 global with sharing class UserRegister_WebService {  
  /*  
   HttpPost method is used to capture a HttpPost request has been sent to our rest apex class.  
   Used to retrieve data coming in the request body and performing corressponding actions  
  */  
  @HttpPost  
   global static String doPost() {  
       
     RestRequest request = RestContext.request;  
     //Returns the RestResponse for our Apex REST method.  
     RestResponse response = RestContext.response;  
     //Access the request body with input data coming in the JSON format  
     String jSONRequestBody=request.requestBody.toString().trim();  
     system.debug('jSONRequestBody"+'+ jSONRequestBody);
     UserRegistration_Response resp = new UserRegistration_Response();
     //Deserializes the input JSON string into an Account object 
     try{
         UserRegistration_Request usrObj = UserRegistration_Request.jsonDeserialize(jSONRequestBody);  
         //insert the account object and return the account ID   
         
         Contact_Details__c con = new Contact_Details__c();
         
         con.Phone__c = usrObj.contactDetails.phone;
         con.Primary_Email__c = usrObj.contactDetails.email;
         insert con;
         
         User_Details__c usrDetails = new User_Details__c();
         usrDetails.Name  = usrObj.name;
         usrDetails.type__c = usrObj.userType;
         usrDetails.User_Name__c = usrObj.userName;
         usrDetails.Contact_Detail__c= con.id;
         insert usrDetails;
         
        resp.status = 'success';
        resp.result =  'User Registered Successfully';
        
     }catch(Exception e){
         
        resp.status = 'Error';
        resp.result = e.getMessage();
     }
     
     return Json.serialize(resp); 
   }  
   /*  
   HttpGet method is used to capture a HttpGet request has been sent to our rest apex class.  
   Used to request data on the basis of a parameter sent in the URL  
  */  
  @HttpGet  
   global static string doGet() {  
    
     //Returns the RestRequest object for our Apex REST method.  
     RestRequest request = RestContext.request;  
     //Returns the RestResponse for our Apex REST method.  
     RestResponse response = RestContext.response;  
     //Retrieve the parameter sent in the URL  
     String phone = RestContext.request.params.get('phone');
     String value = RestContext.request.params.get('value');
     System.debug('phone' + phone + '.........value= ' + value);
     User_Details__c usrDetails = new User_Details__c();
     usrDetails.Name  = phone;
     usrDetails.Value_Selected__c = value;
     insert usrDetails;
     String resp = '{ "result" : "user record successfully created" }';
     return resp; 
   } 
   
   
   
   class UserRegistration_Response{
       
       String status;
       String result;
   }
   
 }