#define _WINSOCK_DEPRECATED_NO_WARNINGS 
#pragma comment(lib,"ws2_32.lib")
#include<iostream>
#include<WinSock2.h>

using namespace std;

int main(){

    std::cout<<"Attempting to create a server";
    SOCKET wsocket ;
    SOCKET new_wsocket;
    WSADATA wsaData;
    struct sockaddr_in server;
    int server_let;
    int BUFFER_SIZE = 37020;
    
    //initialise the winsoc api call
    if(WSAStartup(MAKEWORD(2,2),&wsaData)!=0){
        std::cout<<"could not initialise winsoc api"<<endl;
    }

    //create a socket
    wsocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if(wsocket == INVALID_SOCKET){
        cout<<"could not create socket"<<endl;
    }



    return 0;
}
