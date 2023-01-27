import pyodbc
server = 'om3gym.database.windows.net'
database = '0m3gym'
username = 'zbw'
password = '{ZHAObowen66714321!}'   
driver= '{ODBC Driver 18 for SQL Server}'

def test_get_users():
    with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password + ';TrustServerCertificate=yes;') as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT [username],[password] ,[uid] FROM [dbo].[user] WHERE [username]='%s';" % 'Cathy')
            row = cursor.fetchone()
            while row:
                print (str(row[0]) + " " + str(row[1]))
                row = cursor.fetchone()
                
                
def test_create_users():
    with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password + ';TrustServerCertificate=yes;') as conn:
        with conn.cursor() as cursor:
            cursor.execute("INSERT INTO [dbo].[user] ([uid], [username],[password]) VALUES ('%d', '%s','%s');" % (1, 'Cathy','123456'))
            conn.commit()
                
                
if __name__ == '__main__':
    test_get_users()