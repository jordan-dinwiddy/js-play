function route(handle, path, request, response) {
    console.log("Attempting to route for path=" + path);

    if(typeof handle[path] === 'function') {
        try {
            handle[path](request, response);
        } catch(e) {
            console.log("Exception thrown whilst running request handler for path=" + path);
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("500 Internal server error");
            response.end();
        }
        
    } else {
        console.log("No request handler found for " + path);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;