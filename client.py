import socket
print("Starting a client: Client 1")


HOST = "localhost"
PORT = 3000 # this is the port for our server to connect

# created a new socket object
client_socket = socket.socket()

client_socket.connect((HOST, PORT)) # client need to connect to the server client

client_socket.sendall(b"hello from the client 1")