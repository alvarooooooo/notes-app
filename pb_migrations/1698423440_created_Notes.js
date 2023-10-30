/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9zywrkemf1yrdw7",
    "created": "2023-10-27 16:17:20.309Z",
    "updated": "2023-10-27 16:17:20.309Z",
    "name": "Notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "diqfqag2",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q40u3unq",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9zywrkemf1yrdw7");

  return dao.deleteCollection(collection);
})
