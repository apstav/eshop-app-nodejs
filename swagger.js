const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')
const Product = require('./models/product.model')

exports.options = {
    "definitions":{
        User: m2s(User),
        Product: m2s(Product)
    },
    "swagger":"2.0",
    "info": {
        "version": "1.0.0",
        "description": "Products Project Application API",
        "title": "Products CRUD API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "Users",
            "description": "API for Users"
        },
        {
            "name": "Users and Products",
            "description": "API for Users and their products"
        }
    ],
    "schemes":["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths":{
        "/api/user/findall":{
            "get":{
                "tags":["Users"
                ],
                "summary": "Gets all users from collection",
                "responses":{
                    "200":{
                        "description":"OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/findOne/{username}":{
            "get":{
                "tags":["Users"
                ],
                "parameters":[
                    {
                        "name":"username",
                        "in":"path",
                        "required":"true",
                        "description": "Username of user",
                        "type":"String"
                    }
                ],
                "summary": "Gets a user from collection",
                "responses":{
                    "200":{
                        "description":"User Found",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/api/user/create":{
            "post":{
                "tags":["Users"
                ],
                "description":"Create new user in app",
                "parameters": [{
                    "name": "Create user",
                    "in":"body",
                    "description": "user parameters that we will create",
                    "schema":{
                        "type":"object",
                        "properties": {
                            "username": {"type":"string"},
                            "name": {"type":"string"},
                            "surname": {"type":"string"},
                            "email": {"type":"string"},
                            "adress":{
                                "type":"object",
                                "properties":{
                                    "area": {"type":"string"},
                                    "road": {"type":"string"}
                                }
                            },
                            "phone":{
                                "type":"array",
                                "items":{
                                    "type":"object",
                                    "properties":{
                                        "type": {"type":"string"},
                                        "number": {"type":"string"},
                                    },
                                },
                            }
                        },
                        "required":["username", "email"]
                    }
                }],
                "produces":["application/json"],
                "resourses":{
                    "200":{
                        "description": "New user is created",
                        "schema":{
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        '/api/user/update':{
            "patch":{
                "tags":[
                    "Users"
                ],
                "description":"update user",
                "parameters":[{
                    "name":"update user in system",
                    "in":"body",
                    "description": "user that we will update",
                    "schema":{
                        "type":"object",
                        "properties": {
                            "username": {"type":"string"},
                            "name": {"type":"string"},
                            "surname": {"type":"string"},
                            "email": {"type":"string"},
                            "adress":{
                                "type":"object",
                                "properties":{
                                    "area": {"type":"string"},
                                    "road": {"type":"string"}
                                }
                            },
                            "phone":{
                                "type":"array",
                                "items":{
                                    "type":"object",
                                    "properties":{
                                        "type": {"type":"string"},
                                        "number": {"type":"string"},
                                    },
                                },
                            }
                        },
                        "required":["email"]
                    }
                }],
                "produces":["application/json"],
                "responses": {
                    "200": {
                        "description": "updated user"
                    }
                }
            }
        },
        '/api/user/delete/{username}':{
            "delete":{
                "tags":[
                    "Users"
                ],
                "description":"delete user",
                "parameters":[{
                    "name":"username",
                    "in":"path",
                    "description": "user that we will delete",
                }],
                "responses": {
                    "200": {
                        "description": "user deleted"
                    }
                }
            }
        },
        '/api/userproducts/findone/{username}':{
            "get": {
                "tags":[
                    "Users and Products"
                ],
                "parameters":[{
                    "name":"username",
                "in":"path",
                "description": "find user's products",
                "type":"string"
                }],
                "responses": {
                    "200": {
                        "description": "Users and Products'"
                    }
                }
                
            }
        }
    }
}





