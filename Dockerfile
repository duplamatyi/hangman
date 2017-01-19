# start with Python 3.6.0
FROM python:3.6.0-slim

# Environment variable for the install path of the app inside the Docker image
ENV INSTALL_PATH /hangman
RUN mkdir -p INSTALL_PATH

# Set the working directory
WORKDIR INSTALL_PATH

# Copy the project
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Set the Flask app
ENV FLASK_APP hangman.py

# Set the entry point
# ENTRYPOINT ["flask"]

# Start the server
CMD flask run --host=0.0.0.0
