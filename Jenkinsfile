pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/surajsatmohankar/PlayWright_jenkins'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
