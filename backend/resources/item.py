from flask_restful import Resource
from flask import request

class Item(Resource):

    items = []

    def get(self, name):
        item = next(filter(lambda x:x['name'] == name, self.items), None)
        return {'item': item}, 200 if item is not None else 404

    def post(self, name):
        if next(filter(lambda x:x['name'] == name, self.items), None) is not None:
            return {'message': 'Item {} is already present in the list'.format(name)}

        data = request.get_json()

        item = {'name': name, 'price': data['price']}
        self.items.append(item)

        return item, 201

class ItemList(Resource):

    def get(self):
        if not Item.items:
            return {'item': None}, 200
        return Item.items, 200


