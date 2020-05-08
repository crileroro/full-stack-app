
docker image build -t crileroro/be-shopping-python-prd:$SHA -t crileroro/be-shopping-python-prd:latest -f backend/Dockerfile.dev ./backend
docker image build -t crileroro/fe-shopping-react-prd:$SHA -t crileroro/fe-shopping-react-prd:latest -f frontend/Dockerfile ./frontend

docker push crileroro/be-shopping-python-prd:latest
docker push crileroro/fe-shopping-react-prd:latest
docker push crileroro/be-shopping-python-prd:$SHA
docker push crileroro/fe-shopping-react-prd:$SHA

kubectl apply -f k8s
kubectl set image deployments/be-deploy be-shopping=crileroro/be-shopping-python-prd:$SHA
kubectl set image deployments/fe-deploy fe-shopping=crileroro/fe-shopping-react-prd:$SHA
