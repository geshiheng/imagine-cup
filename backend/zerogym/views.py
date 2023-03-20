from django.http import JsonResponse
import pyodbc
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt


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
    return "Hello, world. You're at the polls index."