import socket
import threading


def connect_a_client(conn, addr):
    print("New client has been connnected")
    data = conn.recv(2048)
    print("Data received from client is:", data)

HOST = "localhost"

PORT = 3000

# created a new socket object
server_socket = socket.socket()

# bind the socket object to the host & port
server_socket.bind((HOST, PORT))

# start listening for new connection
server_socket.listen()

print("Server is listening on", HOST, PORT)

while True:
    conn, addr = server_socket.accept() # it is accepting a new connetion
    t = threading.Thread(target = connect_a_client, args = (conn, addr)) #it is preparing the thread
    t.start() # it start running the thread