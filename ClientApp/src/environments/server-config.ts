export function getServerConfig (isDev: boolean): any {
    return isDev ? devServers : prodServers;
}

let prodServers = {
    //hostUrl : 'http://localhost:8080',
    hostUrl : 'http://51.89.43.177:80',
}

let devServers = {
    //hostUrl : 'http://localhost:8080',
    hostUrl : 'http://51.89.43.177:80',
}


