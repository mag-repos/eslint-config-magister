module.exports = {
    rules: {
        "sort-class-members/sort-class-members": [
            2,
            {
                "order": [
                    "[static-properties]",
                    "[angular-input-decorator]",
                    "[angular-output-decorator]",
                    "[angular-viewchild-decorator]",
                    "[angular-viewchildren-decorator]",
                    "[properties]",
                    "[conventional-private-properties]",
                    "[arrow-function-properties]",
                    "[getters]",
                    "[setters]",
                    "constructor",
                    "[static-methods]",
                    "[methods]",
                    "[conventional-private-methods]"
                ],
                "groups": {
                    "static-properties": [
                        {
                            "type": "property",
                            "static": true,
                            "sort": "alphabetical"
                        }
                    ],

                    "angular-input-decorator": [
                        {
                            "groupByDecorator": "Input",
                            "type": "property",
                            "sort": "alphabetical"
                        }
                    ],
                    "angular-output-decorator": [
                        {
                            "groupByDecorator": "Output",
                            "type": "property",
                            "sort": "alphabetical"
                        }
                    ],
                    "angular-viewchild-decorator": [
                        {
                            "groupByDecorator": "ViewChild",
                            "type": "property",
                            "sort": "alphabetical"
                        }
                    ],
                    "angular-viewchildren-decorator": [
                        {
                            "groupByDecorator": "ViewChildren",
                            "type": "property",
                            "sort": "alphabetical"
                        }
                    ],
                    "properties": [{ "type": "property" }],
                    "conventional-private-properties": [
                        {
                            "type": "property",
                            "name": "/_.+/"
                        }
                    ],
                    "arrow-function-properties": [
                        {
                            "propertyType": "ArrowFunctionExpression"
                        }
                    ],
                    "getters": [
                        {
                            "type": "method",
                            "kind": "get",
                            "sort": "alphabetical"
                        }
                    ],
                    "setters": [
                        {
                            "type": "method",
                            "kind": "set",
                            "sort": "alphabetical"
                        }
                    ],
                    "static-methods": [
                        {
                            "type": "method",
                            "static": true,
                            "sort": "alphabetical"
                        }
                    ],
                    "methods": [
                        {
                            "type": "method"
                        }
                    ],
                    "conventional-private-methods": [
                        {
                            "name": "/_.+/",
                            "type": "method"
                        }
                    ]
                },
                "accessorPairPositioning": "getThenSet"
            }
        ]
    },
  };
  