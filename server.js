import * as http from "node:http";

console.log("Starting Nodejs Server")
http.createServer(myServer).listen(2023)

function myServer(request,response){
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Today's Weather</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <style>
            * {
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                background-color: #121212;
            }
    
            h5 {
                font-weight: 100;
                color: #757575!important;
            }
    
            p {
                font-family: Arial, Helvetica, sans-serif;
                color: #757575!important;
            }
    
            .text-white .w-50 {
                border-color: #292929!important;
                background-color: #292929!important;
            }
    
            #loc {
                background-color: #292929!important;
            }
    
            img {
                background-color: #292929!important;
                background-image: url(assets/logo/pngwing.com.png);
            }
    
            h1, h5, h3, p {
                background-color: #292929!important;
            }
        </style>
    </head>
    <body class="text-white">
        <div class="d-flex justify-content-center align-content-center flex-wrap text-center vh-100">
            <div class="w-50 border rounded-4 p-5">
                <img src="assets/logo/pngwing.com.png" alt="" height="125px">
                <h1><span id="loc"></span> Weather</h1>
                <h5 id="timeAndDate" class="mb-5"></h5>
                <hr class="mb-5">
                <h3 class="mt-4">Max Temp</h3>
                <p id="maxTemp"></p>
                <h3>Min Temp</h3>
                <p id="minTemp" class="m-0"></p>
            </div>
        </div>
    
    <script>
            var currentdate = new Date();
            fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dasmari%C3%B1as?unitGroup=metric&include=days&key=WQCXWLK8FEPJNLR624GZX7UYL').then(function(result){
                return result.json();
            }).then(function(result){
                let loc = document.getElementById("loc")
                let tAd = document.getElementById("timeAndDate")
                let maxTemp = document.getElementById("maxTemp")
                let minTemp = document.getElementById("minTemp")
                tAd.innerHTML = (currentdate);
                loc.innerHTML = (result.resolvedAddress);
                maxTemp.innerHTML = (result.days[0].tempmax);
                minTemp.innerHTML = (result.days[0].tempmin);
            });
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </body>
    </html>
    `)

    response.end();
}