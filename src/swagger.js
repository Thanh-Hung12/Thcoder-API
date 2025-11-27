import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TH-Coder User API',
            version: '1.0.0',
            description: 'API for managing users with full CRUD operations',
            contact: {
                name: 'TH-Coder API Support',
                email: 'support@thcoder.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3001',
                description: 'Development server'
            },
            {
                url: 'http://localhost:3000',
                description: 'Development server (alternate)'
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'MongoDB user ID',
                            example: '507f1f77bcf86cd799439011'
                        },
                        name: {
                            type: 'string',
                            description: 'User full name',
                            example: 'John Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email address (unique)',
                            example: 'john@example.com'
                        },
                        age: {
                            type: 'number',
                            description: 'User age',
                            example: 30,
                            default: 18
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'User creation timestamp',
                            example: '2025-11-27T10:30:00Z'
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'User last update timestamp',
                            example: '2025-11-27T10:30:00Z'
                        }
                    }
                },
                UserInput: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User full name',
                            example: 'John Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email address (unique)',
                            example: 'john@example.com'
                        },
                        age: {
                            type: 'number',
                            description: 'User age',
                            example: 30
                        }
                    }
                },
                SuccessResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Success'
                        },
                        data: {
                            $ref: '#/components/schemas/User'
                        }
                    }
                },
                UsersListResponse: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/User'
                    }
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Error message'
                        }
                    }
                },
                NotFoundError: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'User not found'
                        }
                    }
                },
                ValidationError: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Validation error or duplicate email'
                        }
                    }
                },
                ServerError: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Internal server error'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/userRouters.js']
};

const specs = swaggerJsDoc(options);

export const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUiExpress.serve);
    app.get('/api-docs', swaggerUiExpress.setup(specs, {
        swaggerOptions: {
            persistAuthorization: true
        }
    }));
};
