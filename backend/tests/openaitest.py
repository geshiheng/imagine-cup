import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")

def chatgpt_intent_cls(text):
    answer = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                    {"role": "system", "content": "You are going to act as an AI assistant that would only classify whether the user want to start their workout based on the user's input. When the user is talking about starting their workout, you should output 'start'. When the user is talking about not starting their workout, you should output 'not start'. When the user is talking about something else irrelevant to their workout or health, you should output 'irrelevant'. Your output should be either 'start', 'not start', or 'irrelevant' with nothing else. Do not generate anything extra for explanations but just start, not start, or irrelevant."},
                    {"role": "user", "content": text},
                ]
            )
    answer_content = answer['choices'][0]['message']['content']
    return answer_content

audio_file= open("backend/data/static/media/example.wav", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)