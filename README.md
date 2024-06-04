# Pneumonia Detection using LLM Model

This project aims to detect pneumonia in medical images using an LLM (large Language Model) AI.

## Front-end Interface

In this interface, you can follow these steps:

Start the project by using Docker Compose. You can do this by running the command ./start.sh in your terminal.

Once the project is running, open your web browser and navigate to http://localhost:3000. This will take you to the application's front-end interface.

In the interface, you can upload the medical image (X-ray) that you want to analyze. You can do this by dragging and dropping the image onto the designated area.

After uploading the image, the application will process it using the LLM (large Language Model) AI. It will then provide instructions on how to determine if the patient has pneumonia or not.

If you encounter any issues with the application, you can refer to the "Troubleshooting" section in the README file for steps to resolve common problems.

![FRONT](/ressources/front.png)

## Dataset
The dataset used for training and testing the LLM model consists of X-ray images of patients with and without pneumonia. It is a publicly available dataset called [Chest X-Ray Images (Pneumonia)](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia).


## Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/your-username/your-repo.git
    ```

2. Install docker-compose

https://docs.docker.com/compose/install/

    ```shell
    brew install docker-compose
    ```

## Usage

1. Start the project using Docker Compose:

    ```shell
    ./start.sh
    ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. Upload the medical image you want to analyze.

4. Follow the instructions in the application to determine if the patient has pneumonia or not.

## Troubleshooting

- If you encounter any issues with the application, try the following steps:
  - Make sure you have Docker and Docker Compose installed.
  - Check that the required ports (e.g., 3000) are not being used by other applications.
  - Restart the Docker containers using `docker-compose restart`.
