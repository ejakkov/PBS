public with sharing class MockAPI {
    @AuraEnabled(cacheable=true)
    public static List<JSON2Apex> getMockResponse() {
    List<JSON2Apex> responseParsed = new List<JSON2Apex>();
    String endpoint = 'https://e54960ea-a3ce-4e98-9058-3396afdc880c.mock.pstmn.io/getMetadataForms';
    HttpRequest req = new HttpRequest();
    req.setEndpoint(endpoint);
    req.setMethod('GET');
    Http http = new Http();
    try {
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            String responseBody = res.getBody();
            responseParsed = JSON2Apex.parse(responseBody);         
        } else {
            System.debug('HTTP request failed with status: ' + res.getStatusCode() + ' ' + res.getStatus());
        }
    } catch (Exception e) {
        System.debug('Exception occurred during HTTP request: ' + e.getMessage());
    }
    Map<String, List<String>> m1 = new Map<String, List<String>>();
    System.debug(responseParsed[0].Fields[2].customFieldText);
    List<String> listOfString = new List<String>();
    listOfString.add(responseParsed[0].Fields[1].customFieldText);
    listOfString.add(responseParsed[0].Fields[1].customFieldType);
    m1.put('fields', listOfString);
    m1.put('setting', listOfString);
    return responseParsed;
}
}
