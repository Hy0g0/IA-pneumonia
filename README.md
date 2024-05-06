# Pneumonia Detection using LLM Model

This project aims to detect pneumonia in medical images using an LLM (large Language Model) AI.

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

## License

This project is licensed under the [MIT License](LICENSE).
