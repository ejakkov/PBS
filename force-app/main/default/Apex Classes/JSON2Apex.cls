public class JSON2Apex {

    public String customFieldCode;
    public Integer customFieldLength;
    public Integer customFieldPositionNo;
    public Integer customFieldSeqNo;
    public String customFieldText;
    public String customFieldType;
    public String effectiveDate;
    public PreviousAnswer previousAnswer;
    public Response response;
    public Settings settings;
    public Boolean visible;

    public class PreviousAnswer {
        public String answerText;
    }

    public class Response {
        public Integer customFieldSeqNo;
        public String answerText;
    }

    public class Settings {
    }

    public static List<JSON2Apex> parseFields(String json) {
        List<Map<String, Object>> parsedJson = (List<Map<String, Object>>) JSON.deserializeUntyped(json);
        List<JSON2Apex> fieldsList = new List<JSON2Apex>();
        
        for (Map<String, Object> entry : parsedJson) {
            if (entry.containsKey('Fields')) {
                List<Map<String, Object>> fields = (List<Map<String, Object>>) entry.get('Fields');
                for (Map<String, Object> field : fields) {
                    JSON2Apex fieldsObj = new JSON2Apex();
                    fieldsObj.customFieldCode = (String) field.get('customFieldCode');
                    fieldsObj.customFieldLength = (Integer) field.get('customFieldLength');
                    fieldsObj.customFieldPositionNo = (Integer) field.get('customFieldPositionNo');
                    fieldsObj.customFieldSeqNo = (Integer) field.get('customFieldSeqNo');
                    fieldsObj.customFieldText = (String) field.get('customFieldText');
                    fieldsObj.customFieldType = (String) field.get('customFieldType');
                    fieldsObj.effectiveDate = (String) field.get('effectiveDate');
                    fieldsObj.visible = (Boolean) field.get('visible');
                    // Additional fields can be mapped similarly if needed

                    // Add the mapped object to the list
                    fieldsList.add(fieldsObj);
                }
                break; // Assuming you only want the 'Fields' part and stop after processing it
            }
        }

        return fieldsList;
    }
}
