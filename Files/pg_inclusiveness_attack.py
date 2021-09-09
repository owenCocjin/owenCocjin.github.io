import socket

addr="192.168.56.111"
port=80
f=open("crawler_user-agents.ascii.txt", 'r')

payload=f"""GET /robots.txt HTTP/1.1\r
Host: {addr}:{port}\r\n"""


def main():
	#Create socket
	while True:
		client=socket.socket(socket.AF_INET, socket.SOCK_STREAM)
		client.connect((addr, port))
		#Generate user-agent
		agent=f.readline().strip()
		print(f"[|X:main]: Trying {agent} ...")
		#Assemble payload
		tosend=f"{payload}User-Agent: {agent}\r\n\r\n"
		#Send request
		client.send(tosend.encode())
		#Receive request
		reply=client.recv(1023)
		#Parse reply.
		#If it contains the rejection string in the body, continue
		rply_head,rply_body=reply.split(b'\r\n\r\n')
		code=rply_head.decode()[:rply_head.find(b'\n')]
		print(f"[|X:main]: Reply: {code}")
		if b'You are not a search engine!' in rply_body:
			continue
		#Print find
		rply_body=rply_body.decode().replace('\n','\n\t')
		print(f"[|X:main]: Found:\n\t{rply_body}")
		break



if __name__=="__main__":
	try:
		main()
	except KeyboardInterrupt:
		print('\r\033[K', end='')
