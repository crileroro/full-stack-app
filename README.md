# Full Stack App
This app is a test example aimed to show a full stack app which provides the very simple functionality to add items via an UI to the backend. It is composed of the following services:
* *Frontend* (fe-shopping): React app. It uses *semantic-ui react* to define the UI. 
* *Backend* (be-shopping): API to the frontend written in Python - Flask. It is composed of the following endpoints:

  * */items-all*: Retrieve all items in the backend.
  * */item/<item_name>*: Push a new item to the backend. 
* *Proxy* (router): Nginx-based proxy which routes the calls from the browser to either the frontend or the backend.

## Getting Started
These instructions will help you start the full-stack app.

### Prerequisites
* Docker CE.
* Docker Compose.

### Installing
Run `docker-compose` command from the root of the project:
``` sh
$ docker-compose up -d
```
This command will spin up 3 services: *fe-shopping, be-shopping and router*.

### Accessing the app
The only service accessible from the outside is *router*. Access it from your browser to `localhost:3050`.

---
## Spinning up single services
If you wish to spin up the single service, be it backend or frontend, follow the following instructions (Bear in mind that the frontend will not be able to call the backend if initiated individually - not using `docker-compose`):
### Backend
1. Inside the directory `backend`, create a new Python virtual environment:
```sh
$ virtualenv python-env -p python3
```
2. Activate it:
```sh
$ source python-env/bin/activate
```
3. Install all the required modules using the *requirements.txt* file.
```sh
pip install -r requirements.txt
```
4. Run the app. You could access is to `localhost:5000`
```sh
python app.py
```

### Frontend
1. Go to *frontend/fe-shopping* folder.
2. Install all the necessary modules from *package.json*:
```sh
npm install
```
3. Run the app:
```sh
npm run start
```

## Kubernetes deployment
You can deploy this app using different cloud providers or your simply your local machine. In our specific case we will set up our deployment using *Minikube* for local environments and *GCP-GKE* as our cloud provider solution.
You can find all **k8s** object in the `./k8s` folder.
### Minikube
#### Prerequisites
+ Minikube.
+ Kubectl.
#### Installing
Run the following command to create all k8s object defined in this project.
```sh
$ kubectl apply -f k8s/
```
It will create the following objects:
+ fe deployment.
+ be deployment.
+ ClusterIP service for the fe.
+ ClusterIP service for the be.
+ configmap for the be.
+ service ingress controlled based on the Ingress-Nginx.

Obtain the IP of your Minikube cluster with the command `minikube ip`.
You will be able to access the app directly from the browser by using the previous IP on port `80`.

### Google Cloud Platform | Google Kubernetes Engine
The creation process of a new GCP project, activation of Google APIs, creation of service account and its private key as well as the creation of a new k8s cluster in GKE has been automated using the `Google-client-api-python` libraries. You can find this project [here](https://github.com/crileroro/GCP-GKE). 
### Installing
1. Follow the instructions in the project described just above to create your Google Cloud infrastructure.
2. Once you create your Google infrastructure, push some change to master to trigger a new build in Travis CI. Travis build will trigger a new deployment in GKE (See [the Travis file](.travis.yml) to check what the build does).



