
# Deploy Nodejs app using docker


## To run for single image

 1. First build using the command: *docker build -t NAME .* example: *docker run -d -p '4001:4001' docker-node-test*

 2. Run the image using command:  *docker run -it/-d -p MAPPED_PORT>:ACTUAL_PORT NAME* example: *docker run -d -p '4001:4001' docker-node-test*


## To run for multiple image

Run the command: *docker-compose up --build -d*


## Screenshots


![screenshot-1](https://github.com/abhisawesome/Docker-Tutorial/blob/master/screenshots/1.png)



![screenshot-2](https://github.com/abhisawesome/Docker-Tutorial/blob/master/screenshots/2.png)



![screenshot-3](https://github.com/abhisawesome/Docker-Tutorial/blob/master/screenshots/3.png)

