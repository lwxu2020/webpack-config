# webpack-config
Quick setup — if you’ve done this kind of thing before
or	
https://github.com/lwxu2020/webpack-config.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# webpack-config" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lwxu2020/webpack-config.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/lwxu2020/webpack-config.git
git branch -M main
git push -u origin main

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## Build Docker Image
cd <project root folder>
### Build docker image using tag 2.0
docker-compose build --no-cache 
### Tag the Docker image
docker tag liangwuxu/webpack_app liangwuxu/webpack_app:2.0
### Push image to Docker Hub
docker push liangwuxu/webpack_app:2.0
### Download an image from a registry
docker pull liangwuxu/webpack_app:2.0
### Create and run a new container from an image
docker container run -d -p 80:80 liangwuxu/webpack_app:2.0
### Check container ID
docker ps
### Stop container
docker stop <container ID>



