from python:3.8.6

RUN pip install --uprgade pip
COPY ./ ./
RUN pip3 install -r requirements.txt