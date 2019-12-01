import requests

class ServiceUnavailable(Exception):
    def __init__(self, detail: str = 'Service Unavailable'):
        self.detail = detail


class Service:
    def request_cryptocurrencies(self):
        try:
            response = requests.get('https://api.coinmarketcap.com/v1/ticker/')
            if response.status_code == 200:
                return response.json()
        except:
            raise ServiceUnavailable()


    def get_cryptocurrency_by_code(self, code: str):
        cryptocurrencies = self.request_cryptocurrencies()
        currencies_filtered = filter(lambda c: c['symbol'] == code.upper(), cryptocurrencies)
        return list(currencies_filtered)


    def get_biggest_cryptocurrencies(self):
        cryptocurrencies = self.request_cryptocurrencies()
        currencies_sorted = sorted(cryptocurrencies, key=lambda c: float(c['price_usd']), reverse=True)
        return list(currencies_sorted)[:10]
