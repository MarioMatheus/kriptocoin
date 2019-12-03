import json
from app.service import ServiceUnavailable

class MockedService:
    def __init__(self):
        self.mock_data = []
        with open('tests/mock/mock_data.json') as json_file:
            self.mock_data = json.load(json_file)

    def get_cryptocurrency_by_code(self, code: str):
        currencies_filtered = filter(lambda c: c['symbol'] == code.upper(), self.mock_data)
        return list(currencies_filtered)

    def get_biggest_cryptocurrencies(self):
        currencies_sorted = sorted(self.mock_data, key=lambda c: float(c['price_usd']), reverse=True)
        return list(currencies_sorted)[:10]


class MockedServiceUnavailable:
    def get_cryptocurrency_by_code(self, code: str):
        raise ServiceUnavailable()

    def get_biggest_cryptocurrencies(self):
        raise ServiceUnavailable()
