public with sharing class CreateCase {

    @AuraEnabled
    public static String createCaseFromForm(String descriptionPar, String emailPar) {
        String subject = 'New inquiry from Customer portal';
        String description = descriptionPar;
        String email = emailPar;
        Contact con = null;
        System.debug(descriptionPar + emailPar);
        if (Schema.SObjectType.Contact.isAccessible()) {
            
            List<Contact> matchingContacts = [SELECT Id FROM Contact WHERE Email = :email LIMIT 1];
            System.debug(matchingContacts);
            if (!matchingContacts.isEmpty()) {
                con = matchingContacts[0];
                System.debug(con);
            }
        }

        Case caseToAdd = new Case();
        caseToAdd.Subject = subject;
        caseToAdd.Description = description;
        caseToAdd.Status = 'New';
        caseToAdd.Priority = 'Low';
        caseToAdd.SuppliedEmail = email;

        if (con != null) {
            System.debug('con is not null');
            caseToAdd.ContactId = con.Id;
        }

        insert caseToAdd;
        return 'Success';
    }

    @AuraEnabled
    public static String createCaseAutoSubmission() {

        Case newCase = new Case (Status = 'New', Origin = 'Web', Description = 'Auto-submission');

        insert newCase;
        return 'Success';
    }
}
