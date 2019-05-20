## Azure CLI

https://docs.microsoft.com/es-es/azure/aks/kubernetes-walkthrough

## Configuration

### Azure cli

AKS_RESOURCE_GROUP=nodejs-app
AKS_CLUSTER_NAME=nodejs-app-cluster

ACR_RESOURCE_GROUP=nodejs-app
ACR_NAME=partifyappnodejs

## Docker registry

```
docker login partifyappnodejs.azurecr.io
```

or

```
az acr login --name partifyappnodejs
```

### upload image

```
docker build -t partifyappnodejs.azurecr.io/nginx-react frontend
docker push partifyappnodejs.azurecr.io/nginx-react
```

```
docker build -t partifyappnodejs.azurecr.io/nodejs-app backend
docker push partifyappnodejs.azurecr.io/nodejs-app
```

## Kubernetes configure

### auth

```
az aks get-credentials --resource-group nodejs-app --name nodejs-app-cluster
```

## Auth | Kubernetes -> Docker registry

https://docs.microsoft.com/bs-latn-ba/azure/container-registry/container-registry-auth-aks
https://docs.microsoft.com/es-es/azure/aks/tutorial-kubernetes-deploy-cluster

```
./acr_aks.sh
```

### kubernetes dashboard

https://docs.microsoft.com/es-es/azure/aks/kubernetes-dashboard

```
az aks browse --resource-group nodejs-app --name nodejs-app-cluster
```

### Kubermetes apply

```
kubectl apply -f kubernetes/nodejs-nginx.yaml
```

## Upload secrets

- Nodejs app secrets

```
kubectl create secret generic nodejs-app-secrets \
  --from-literal=DATABASE_USERNAME=root \
  --from-literal=DATABASE_PASSWORD=<DATABASE_PASSWORD>
```

Update secrets dowload as yaml and edit values in base64

```
kubectl get secrets nodejs-app-secrets -o yaml
kubectl apply -f kubernetes/azure/secrets.yml
```
