from fastapi import FastAPI, HTTPException, Depends
from .service import Service, ServiceUnavailable


app = FastAPI()


@app.get('/')
def root():
    return 'Hello Kriptocoin'


@app.get('/buscar/')
def search_cryptocurrency(codigo: str, service: Service = Depends()):
    try:
        cryptocurrencies = service.get_cryptocurrency_by_code(codigo)
        if len(cryptocurrencies) == 0:
            raise HTTPException(404, detail='Criptomoeda nao encontrada')
        return cryptocurrencies[0]
    except ServiceUnavailable:
        raise HTTPException(503, detail='Service Unavailable')


@app.get('/listar-maiores')
def list_of_biggests(service: Service = Depends()):
    try:
        return service.get_biggest_cryptocurrencies()
    except ServiceUnavailable:
        raise HTTPException(503, detail='Service Unavailable')
