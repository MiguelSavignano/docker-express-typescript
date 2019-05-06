# Kubernetes GKE

## Upload secrets

- SQL cloud proxy service account file.

```
kubectl create secret generic cloudsql-instance-credentials --from-file=credentials.json=./credentials.json
```

- Nodejs app secrets

```
kubectl create secret generic nodejs-app-secrets \
  --from-literal=DATABASE_USERNAME=root \
  --from-literal=DATABASE_PASSWORD=<DATABASE_PASSWORD>
```

.
