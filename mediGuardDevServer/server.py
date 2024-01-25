#simple python server to handle requests for the LLM integration

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import cohere
from prompts import ANONYMIZE_PROMPT

app = Flask(__name__)
CORS(app) 

@app.route('/anonymize', methods=['POST'])
def request_anonymization():
    """
    handles requests to anonymize text input, by sending a LLM prompt
    request holds input in form {"userInput": <<textToAnonyize>>}

    :return the anonyimized text
    """

    userInput = request.get_json().get("userInput") 
    co = cohere.Client('cZ4pvXjG1SSgmPb9p2Ze0sPdO1i7g6swctaTwHV2')
    aiResponse = co.generate(prompt=ANONYMIZE_PROMPT+userInput, truncate='END', return_likelihoods='NONE')

    return jsonify({'message': aiResponse[0]})

if __name__ == '__main__':
    app.run(debug=True)
  

