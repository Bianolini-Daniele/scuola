import socket
import threading

# Client Side
# TCP che si connette a un server, invia un messaggio e riceve una risposta.

# ===== CONFIGURAZIONE =====
ADDRESS_FAMILY = socket.AF_INET     # IPv4
SOCKET_TYPE = socket.SOCK_STREAM    # TCP
SERVER_HOST = 'localhost'           # (da modificare)Indirizzo del server
SERVER_PORT = 5000                  # (da modificare)Porta del server

stop_evento = threading.Event()


def scrittura(socket, stop_evento):
    while not stop_evento.is_set():
        messaggio = input("Inserisci il messaggio da inviare agli altri client: ")
        if messaggio.lower() == 'stop':
            stop_evento.set()
            break
        socket.send(messaggio.encode('utf-8'))
    stop_evento.set()

def lettura(socket, stop_evento):
    while not stop_evento.is_set():
        data = socket.recv(1024)
        if not data:
            print("Il server si è disconnesso")
            stop_evento.set()
            break
        print("Messaggio ricevuto dagli altri client:")
        print(data.decode('utf-8'))
    stop_evento.set()

                        
print("\n=== CLIENT TCP - Avvio ===")

# FASE 1: socket() - Crea socket
client = socket.socket(ADDRESS_FAMILY, SOCKET_TYPE)
print(f"[1] Socket creato")

# FASE 2: connect() - Connessione al server (Three-way handshake)
client.connect((SERVER_HOST, SERVER_PORT))
print(f"[2] Connesso a {SERVER_HOST}:{SERVER_PORT}")

# FASE 3
t_scrittura = threading.Thread(target=scrittura, args=(client, stop_evento), daemon= True)
t_lettura = threading.Thread(target=lettura, args=(client, stop_evento), daemon= True)
t_scrittura.start()
t_lettura.start()
t_scrittura.join()
t_lettura.join()

# FASE 5: close() - Chiude connessione
client.close()
print(f"[5] Connessione Client chiusa\n")
