public with sharing class CreateCase {
    // @AuraEnabled(cacheable=true)
    public static String getMoviesPosterURL(String descriptionPar, String emailPar) {
        return one;
        String subject = 'New inquiry from Customer portal';
        String description = descriptionPar;
        Contact con = [SELECT Id FROM Contact WHERE email =:emailPar];
        String status = 'New';
        String priority = 'Low';
        String email = emailPar;
        
    }
  
}