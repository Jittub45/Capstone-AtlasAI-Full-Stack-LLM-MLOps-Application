

---

# Capstone: End-to-End AI & MLOps Implementation

## Overview

This project demonstrates a complete **AI and MLOps lifecycle** — from data ingestion to model deployment and monitoring — using tools like **MLflow**, **DVC**, **Docker**, **GitHub Actions**, and **AWS (S3, ECR, EKS)**.
It also includes a **Flask-based web interface** built with **HTML** and **CSS** to interact with the deployed AI model.

---

## Tech Stack

* **Python 3.10**, **Flask**, **Conda**
* **HTML**, **CSS** – Web interface design
* **AI/ML** – Model training, evaluation, and deployment
* **MLflow** & **DagsHub** – Experiment tracking
* **DVC** – Data and pipeline versioning
* **Docker** – Containerization
* **GitHub Actions** – CI/CD automation
* **AWS (S3, ECR, EKS)** – Cloud storage, registry, and orchestration
* **Prometheus** & **Grafana** – Application monitoring

---

## Project Structure

```
src/
 ├── data_ingestion.py
 ├── data_preprocessing.py
 ├── feature_engineering.py
 ├── model_building.py
 ├── model_evaluation.py
 ├── register_model.py
flask_app/
 ├── static/        # Contains CSS and assets
 ├── templates/     # HTML templates for the web interface
.github/workflows/
dvc.yaml
params.yaml
requirements.txt
```

---

## Pipeline Flow

1. Data Ingestion → Preprocessing → Feature Engineering → Model Building → Evaluation
2. Track experiments using MLflow (via DagsHub)
3. Version data and models with DVC
4. Deploy Flask AI app using Docker and AWS EKS
5. Monitor app and model metrics with Prometheus and Grafana

---

## Setup Instructions

1. Clone the repository and create a virtual environment:

   ```bash
   conda create -n atlas python=3.10
   conda activate atlas
   pip install -r requirements.txt
   ```
2. Initialize DVC and MLflow tracking
3. Build and run the Docker image:

   ```bash
   docker build -t capstone-app:latest .
   docker run -p 8888:5000 capstone-app:latest
   ```
4. Execute the CI/CD pipeline to deploy on AWS EKS

---

## Monitoring

* Prometheus runs on port `9090`
* Grafana dashboard available at `http://<grafana-ip>:3000`

---

## Cleanup

To remove all resources:

```bash
kubectl delete deployment flask-app
kubectl delete service flask-app-service
eksctl delete cluster --name flask-app-cluster --region us-east-1
```

---

## License

This project is licensed under the **MIT License**.

---

