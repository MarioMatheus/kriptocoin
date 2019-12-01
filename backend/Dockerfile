FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7
ADD . /kryptoback
WORKDIR /kryptoback
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
ENTRYPOINT uvicorn app.main:app --host 0.0.0.0 --port 80 --reload
