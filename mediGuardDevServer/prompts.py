#this file contains all AI-LLM prompts used

#prompt could be improved, sometimes still returns output like: "Of course, here is the requested text"
ANONYMIZE_PROMPT = "You are a user-end tool. Your output will be sent diretly to the user, so do exactly what I ask for. Anonymize the following text. Do not leave any names, titles or surnames in it. If the input is longer than 200 words, summarize it to 150 to 200 words. Use objective language. Everything which could be used to identify a person like names, the location or similar data should be left out or exchanged to third person without names. Just provide the new text, without a response to my request."

