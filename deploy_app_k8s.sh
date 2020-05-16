# Decrypt service account file
openssl aes-256-cbc -K $encrypted_0218e362b9d6_key -iv $encrypted_0218e362b9d6_iv -in sa_service-account-k8s-cluster_privatekey.json.enc -out sa_service-account-k8s-cluster_privatekey.json -d

# Configure gcloud
curl https://sdk.cloud.google.com | bash > /dev/null
source $HOME/google-cloud-sdk/path.bash.inc
gcloud components update kubectl

# Authorize access to GCP with a service account
gcloud auth activate-service-account --key-file sa_service-account-k8s-cluster_privatekey.json

# Set project and zone 
gcloud config set project k8s-cluster-shoppingapp1
gcloud config set compute/zone europe-west2-a

# Set Kubectl to point to our k8s cluster
gcloud container clusters get-credentials multi-cluster-k8s-shoppingapp



docker image build -t crileroro/be-shopping-python-prd:$SHA -t crileroro/be-shopping-python-prd:latest -f backend/Dockerfile.dev ./backend
docker image build -t crileroro/fe-shopping-react-prd:$SHA -t crileroro/fe-shopping-react-prd:latest -f frontend/Dockerfile ./frontend

docker push crileroro/be-shopping-python-prd:latest
docker push crileroro/fe-shopping-react-prd:latest
docker push crileroro/be-shopping-python-prd:$SHA
docker push crileroro/fe-shopping-react-prd:$SHA

kubectl apply -f k8s
kubectl set image deployments/be-deploy be-shopping=crileroro/be-shopping-python-prd:$SHA
kubectl set image deployments/fe-deploy fe-shopping=crileroro/fe-shopping-react-prd:$SHA
