mysql-deployment.yaml depends on mysql-pvc.yaml
backend-deployment.yaml depends on configmap.yaml, secret.yaml, and mysql-service.yaml
frontend-deployment.yaml depends on backend-service.yaml
ingress.yaml depends on frontend-service.yaml

                  Kubernetes Cluster

              +----------------------+
              |     MySQL Pod        |
              |                      |
              |    mysql:8.0         |
              |                      |
              +----------+-----------+
                         |
                  Persistent Volume
                         |
                  mysql-pvc (2Gi)