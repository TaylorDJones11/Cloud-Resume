# AWS-Powered Resume

This project is a **serverless, cloud-hosted resume website** deployed using **AWS services**. It integrates HTML, CSS, and JavaScript for the front end and utilizes AWS services like **S3, CloudFront, Route 53, DynamoDB, API Gateway, and Lambda** to provide a dynamic and scalable experience.

## 🚀 Features

- **Static Resume Website:** Built with **HTML & CSS**, hosted on **Amazon S3**.
- **Custom Domain & HTTPS:** Secured with **CloudFront** and a custom **Route 53** domain.
- **Visitor Counter:** Implemented with **JavaScript, API Gateway, Lambda (Python), and DynamoDB**.
- **Infrastructure as Code:** Managed using **AWS Serverless Application Model (SAM)**.
- **CI/CD Automation:** Integrated **GitHub Actions** for seamless deployments.

---

## 🛠️ Tech Stack

| Component             | Technology Used |
|----------------------|----------------|
| **Frontend**        | HTML, CSS, JavaScript |
| **Hosting**         | AWS S3 (Static Website) |
| **Security**        | AWS CloudFront (HTTPS) |
| **Domain**          | AWS Route 53 (Custom DNS) |
| **Visitor Counter** | JavaScript, AWS API Gateway, AWS Lambda (Python), AWS DynamoDB |
| **Infrastructure**  | AWS SAM (Infrastructure as Code) |
| **CI/CD (Backend)** | GitHub Actions (Auto Deployment) |
| **CI/CD (Frontend)**| GitHub Actions (S3 Deployment + CloudFront Cache Invalidation) |

---

## 🌐 Deployment Workflow

1. **Frontend Deployment**
   - HTML, CSS, and JavaScript files are uploaded to an **S3 bucket**.
   - CloudFront ensures **secure HTTPS** access.
   - A **custom domain** is configured with **Route 53**.

2. **Backend Deployment**
   - API requests are routed through **AWS API Gateway**.
   - Data is stored in **DynamoDB**.
   - API logic is executed with **AWS Lambda (Python)**.
   - Infrastructure is deployed using **AWS SAM**.

3. **CI/CD Automation**
   - **Backend:** GitHub Actions runs Python tests and deploys changes to AWS.
   - **Frontend:** GitHub Actions updates S3 content and invalidates the CloudFront cache.

---

## 📜 Setup Instructions

### 1️⃣ Prerequisites

- **AWS Account** with IAM permissions
- **AWS CLI** installed and configured
- **AWS SAM CLI** installed
- **GitHub Repository** with GitHub Actions enabled

### 2️⃣ Deploying the Backend (API)

```sh
cd backend
sam build
sam deploy --guided
```

## 💡 References & Learning Resources

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS DynamoDB Basics](https://aws.amazon.com/dynamodb/)
- [AWS API Gateway & Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [AWS CloudFront HTTPS Setup](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html)
- [GitHub Actions for AWS](https://docs.github.com/en/actions)
