from app.main import app
from app.service import Service
from starlette.testclient import TestClient
from .mock.mock_service import MockedService, MockedServiceUnavailable


client = TestClient(app)


def test_service_available():
    app.dependency_overrides[Service] = MockedService

    def test_search_cryptocurrency_correct_code():
        response = client.get('/buscar?codigo=usdt')
        assert response.status_code == 200
        assert response.json() == {
            'id': 'tether', 
            'name': 'Tether', 
            'symbol': 'USDT', 
            'rank': '4', 
            'price_usd': '1.0040869902', 
            'price_btc': '0.00013292', 
            '24h_volume_usd': '26522458926.5', 
            'market_cap_usd': '4124833994.0', 
            'available_supply': '4108044456.0', 
            'total_supply': '4207771504.0', 
            'max_supply': None, 
            'percent_change_1h': '0.32', 
            'percent_change_24h': '-1.17', 
            'percent_change_7d': '-0.32', 
            'last_updated': '1574879901'
        }

    def test_search_cryptocurrency_incorrect_code():
        response = client.get('/buscar/?codigo=incorrect')
        assert response.status_code == 404
        assert response.json() == {
            'detail': 'Criptomoeda nao encontrada'
        }

    def test_list_of_biggests_success_call():
        response = client.get('/listar-maiores')
        assert response.status_code == 200
        currencies = response.json()
        assert len(currencies) == 10
        assert list(map(lambda c: c['rank'], currencies)) == ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    
    test_search_cryptocurrency_correct_code()
    test_search_cryptocurrency_incorrect_code()
    test_list_of_biggests_success_call()



def test_service_unavailable():
    app.dependency_overrides[Service] = MockedServiceUnavailable

    def test_search_cryptocurrency_connection_api_failed():
        response = client.get('/buscar/?codigo=btc')
        assert response.status_code == 503
        assert response.json() == {
            'detail': 'Service Unavailable'
        }


    def test_list_of_biggests_connection_api_failed():
        response = client.get('/listar-maiores')
        assert response.status_code == 503
        assert response.json() == {
            'detail': 'Service Unavailable'
        }

    test_search_cryptocurrency_connection_api_failed()
    test_list_of_biggests_connection_api_failed()


app.dependency_overrides = {}
