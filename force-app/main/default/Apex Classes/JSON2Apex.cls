public class JSON2Apex {

    @AuraEnabled
    public String Category;

    @AuraEnabled
    public List<Fields> Fields;

    @AuraEnabled
    public String Header;

    @AuraEnabled
    public List<String> PlaceholderFields;

    @AuraEnabled
    public List<String> RequiredFields;

    @AuraEnabled
    public Integer Position;

    public class PreConfiguredAnswers {
        @AuraEnabled
        public List<Answer> answer;
    }

    public class ResponseZ {
        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public Object answerText;
    }

    public class SettingsZ {
        @AuraEnabled
        public String Id;

        @AuraEnabled
        public String DeveloperName;

        @AuraEnabled
        public Boolean PBSIsRequiredc;

        @AuraEnabled
        public Boolean PBSLineBreakAfterc;

        @AuraEnabled
        public Boolean PBSLineBreakBeforec;
    }

    public class FieldsX {
        @AuraEnabled
        public String customFieldCode;

        @AuraEnabled
        public Integer customFieldLength;

        @AuraEnabled
        public Integer customFieldPositionNo;

        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public String customFieldText;

        @AuraEnabled
        public String customFieldType;

        @AuraEnabled
        public String effectiveDate;

        @AuraEnabled
        public SettingsZ settings;

        @AuraEnabled
        public ResponseY response;

        @AuraEnabled
        public Boolean visible;

        @AuraEnabled
        public String visibilityControlledBy;
    }

    public class ListOptions {
        @AuraEnabled
        public String label;

        @AuraEnabled
        public String value;
    }

    public class SettingsY {
        @AuraEnabled
        public String Id;

        @AuraEnabled
        public String DeveloperName;

        @AuraEnabled
        public String PBSCustomVisibilityc;

        @AuraEnabled
        public Boolean PBSIsRequiredc;

        @AuraEnabled
        public Boolean PBSLineBreakAfterc;

        @AuraEnabled
        public Boolean PBSLineBreakBeforec;
    }

    public class FieldsV {
        @AuraEnabled
        public String customFieldCode;

        @AuraEnabled
        public Integer customFieldLength;

        @AuraEnabled
        public Integer customFieldPositionNo;

        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public String customFieldText;

        @AuraEnabled
        public String customFieldType;

        @AuraEnabled
        public String effectiveDate;

        @AuraEnabled
        public ResponseY response;

        @AuraEnabled
        public Settings settings;

        @AuraEnabled
        public Boolean visible;

        @AuraEnabled
        public PreConfiguredAnswers preConfiguredAnswers;

        @AuraEnabled
        public List<ListOptions> listOptions;
    }

    public class PreviousAnswer {
        @AuraEnabled
        public String answerText;
    }

    public class ResponseY {
        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public Boolean answerText;
    }

    public class FieldsZ {
        @AuraEnabled
        public String customFieldCode;

        @AuraEnabled
        public Integer customFieldLength;

        @AuraEnabled
        public Integer customFieldPositionNo;

        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public String customFieldText;

        @AuraEnabled
        public String customFieldType;

        @AuraEnabled
        public String effectiveDate;

        @AuraEnabled
        public PreviousAnswer previousAnswer;

        @AuraEnabled
        public SettingsZ settings;

        @AuraEnabled
        public Response response;

        @AuraEnabled
        public Boolean visible;

        @AuraEnabled
        public String visibilityControlledBy;
    }

    public class Response {
        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public String answerText;
    }

    public class Answer {
        @AuraEnabled
        public Integer answerPositionNo;

        @AuraEnabled
        public Integer answerSeqNo;

        @AuraEnabled
        public String answerText;
    }

    
    public class Fields {
        @AuraEnabled
        public String customFieldCode;

        @AuraEnabled
        public Integer customFieldLength;

        @AuraEnabled
        public Integer customFieldPositionNo;

        @AuraEnabled
        public Integer customFieldSeqNo;

        @AuraEnabled
        public String customFieldText;

        @AuraEnabled
        public String customFieldType;

        @AuraEnabled
        public String effectiveDate;

        @AuraEnabled
        public PreviousAnswer previousAnswer;

        @AuraEnabled
        public Response response;

        @AuraEnabled
        public Settings settings;

        @AuraEnabled
        public Boolean visible;
    }

    public class Settings {
    }

    @AuraEnabled
    public static List<JSON2Apex> parse(String json) {
        return (List<JSON2Apex>) System.JSON.deserialize(json, List<JSON2Apex>.class);
    }
}
