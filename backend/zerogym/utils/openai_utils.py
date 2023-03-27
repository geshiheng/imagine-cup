import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
print("OPENAI_API_KEY Loaded:", openai.api_key)

INTENT_TEMPLATE = """You are going to act as a personal coach that would recommend the desired workouts the user wants based on the user’s query. Your output should have two lines. The first line is the name of the workout you recommend to the user, the workout should be either ‘yoga stretch’, ‘squat’, ‘running’, or ‘None’ when the user is not talking about starting an exercise. The second line is your utterance to the user’s query. For example, when the user says ‘Hey! I would like to do some upper body exercise”, your output should be:
Yoga Stretch
Sure! I would like to recommend yoga stretch as your workout!
"""

POST_WORKOUT_TEMPLATE = "Your customer has just finished the workout %s. Please praise their effort and ask their feeling about this workout."

def chatgpt_intent_cls(text):
    answer = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                    {"role": "system", "content": INTENT_TEMPLATE},
                    {"role": "user", "content": text},
                ]
            )
    answer_content = answer['choices'][0]['message']['content']
    return answer_content

def chatgpt_post_workout(workout_type):
    answer = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                    {"role": "system", "content": POST_WORKOUT_TEMPLATE % workout_type},
                ]
            )
    answer_content = answer['choices'][0]['message']['content']
    return answer_content


def whisper_transcribe(audio_file=None, fn=None):
    if audio_file is None:
        audio_file= open(fn, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript