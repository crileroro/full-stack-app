from flask import Flask
from flask_restful import Api
from config.config import env_debug, env_host, env_port

from resources import Item, ItemList

app = Flask(__name__)

api = Api(app)
api.add_resource(Item, '/app/item/<string:name>')
api.add_resource(ItemList, '/app/items-all')

if __name__ == "__main__":
    app.run(host= env_host(), port=env_port(), debug=env_debug())