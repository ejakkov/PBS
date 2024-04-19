public with sharing class MockAPI {

    public static void getMockResponse() {
    String endpoint = 'https://e54960ea-a3ce-4e98-9058-3396afdc880c.mock.pstmn.io/getMetadataForms';

    HttpRequest req = new HttpRequest();
    req.setEndpoint(endpoint);
    req.setMethod('GET');

    Http http = new Http();

    try {
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            String responseBody = res.getBody();
            System.debug(JSON2Apex.parse(responseBody)[0].Fields[0].customFieldText);
            
            
        } else {
            System.debug('HTTP request failed with status: ' + res.getStatusCode() + ' ' + res.getStatus());
        }
    } catch (Exception e) {
        System.debug('Exception occurred during HTTP request: ' + e.getMessage());
    }
       
}

    // List<ResponseWrapper> responseList = (List<ResponseWrapper>) JSON.deserialize(responseBody, List<ResponseWrapper>.class);
}
