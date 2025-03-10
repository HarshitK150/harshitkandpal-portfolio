# Author: Harshit Kandpal <hkandpal944@gmail.com>

# Instantiate Ubuntu 20.04
FROM ubuntu:20.04
LABEL maintainer "Harshit Kandpal <hkandpal944@gmail.com>"
LABEL description="This is a custom Docker Image for Harshit Kandpal's Web Application Projects"

# Update Ubuntu Software repository
RUN apt update
RUN apt -y install python3-pip
RUN apt -y install vim

# Add the Flask application and install requirements
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Open ports, set environment variables, start gunicorn.
EXPOSE 8080 
ENV PORT 8080
ENV FLASK_ENV=production  
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app
# ----------------------------------------------------- 