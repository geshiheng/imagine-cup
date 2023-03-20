import sys
import pyodbc
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django import forms
from .utils.openai_utils import chatgpt_intent_cls, whisper_transcribe

server = 'om3gym.database.windows.net'
database = '0m3gym'
username = 'zbw'
password = '{ZHAObowen66714321!}'   
driver= '{ODBC Driver 18 for SQL Server}'

conn = pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password + ';TrustServerCertificate=yes;')

# Create your views here.

@require_http_methods(["POST"])
@csrf_exempt
def auth(request):
    username, password = None, None
    if 'username' not in request.POST or 'password' not in request.POST:
        return JsonResponse({"auth": False}, safe=False)
    with conn.cursor() as cursor:
        cursor.execute("SELECT [username],[password] ,[uid] FROM [dbo].[user] WHERE [username]='%s';" % request.POST['username'])
        row = cursor.fetchone()
        while row:
            username = row[0]
            password = row[1]
            row = cursor.fetchone()
    if username is None or password is None or password != request.POST['password']:
        return JsonResponse({"auth": False}, safe=False)
    returned_obj = {
        "auth": True,
    }
    return JsonResponse(returned_obj, safe=False)

def index(request):
    print(request)
    return JsonResponse({"response": "Hello World!"}, safe=False)


@require_http_methods(["POST"])
@csrf_exempt
def assistant(request):
    audio_file = request.FILES['audio_file']
    status = request.POST['status']
    if status == 'pre-workout':
        transcription = whisper_transcribe(audio_file)
        answer = chatgpt_intent_cls(transcription['text'])
        return JsonResponse({
            'content': answer
        })
    else:
        return JsonResponse({
            'content': 'Please start your workout first'
        })