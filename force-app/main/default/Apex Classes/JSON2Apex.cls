

public class JSON2Apex {

	public String Category;
	public List<Fields> Fields;
	public String Header;
	public List<String> PlaceholderFields;
	public List<String> RequiredFields;
	public Integer Position;

	public class PreConfiguredAnswers {
		public List<Answer> answer;
	}

	public class ResponseZ {
		public Integer customFieldSeqNo;
		public Object answerText;
	}

	public class SettingsZ {
		public String Id;
		public String DeveloperName;
		public Boolean PBSIsRequiredc;
		public Boolean PBSLineBreakAfterc;
		public Boolean PBSLineBreakBeforec;
	}

	public class FieldsX {
		public String customFieldCode;
		public Integer customFieldLength;
		public Integer customFieldPositionNo;
		public Integer customFieldSeqNo;
		public String customFieldText;
		public String customFieldType;
		public String effectiveDate;
		public SettingsZ settings;
		public ResponseY response;
		public Boolean visible;
		public String visibilityControlledBy;
	}

	public class ListOptions {
		public String label;
		public String value;
	}

	public class SettingsY {
		public String Id;
		public String DeveloperName;
		public String PBSCustomVisibilityc;
		public Boolean PBSIsRequiredc;
		public Boolean PBSLineBreakAfterc;
		public Boolean PBSLineBreakBeforec;
	}

	public class FieldsV {
		public String customFieldCode;
		public Integer customFieldLength;
		public Integer customFieldPositionNo;
		public Integer customFieldSeqNo;
		public String customFieldText;
		public String customFieldType;
		public String effectiveDate;
		public ResponseY response;
		public Settings settings;
		public Boolean visible;
		public PreConfiguredAnswers preConfiguredAnswers;
		public List<ListOptions> listOptions;
	}

	public class PreviousAnswer {
		public String answerText;
	}

	public class ResponseY {
		public Integer customFieldSeqNo;
		public Boolean answerText;
	}

	public class FieldsZ {
		public String customFieldCode;
		public Integer customFieldLength;
		public Integer customFieldPositionNo;
		public Integer customFieldSeqNo;
		public String customFieldText;
		public String customFieldType;
		public String effectiveDate;
		public PreviousAnswer previousAnswer;
		public SettingsZ settings;
		public Response response;
		public Boolean visible;
		public String visibilityControlledBy;
	}

	public class Response {
		public Integer customFieldSeqNo;
		public String answerText;
	}

	public class Answer {
		public Integer answerPositionNo;
		public Integer answerSeqNo;
		public String answerText;
	}

	public class Fields {
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
	}

	public class Settings {
	}

	
	public static List<JSON2Apex> parse(String json) {
		return (List<JSON2Apex>) System.JSON.deserialize(json, List<JSON2Apex>.class);
	}
}