# API Documentation

## `POST /users/register`

### Description
This endpoint is used to register a new user.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The first name of the user (required).
  - `lastname`: The last name of the user (optional).
- `email`: The email address of the user (required).
- `password`: The password for the user account (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

Success
Status Code: 201 Created
Response Body: A JSON object containing the authentication token and user details.
Example:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
Validation Errors
Status Code: 400 Bad Request
Response Body: A JSON object containing the validation errors.
Example: {
  "errors": [
    {
      "msg": "Password is required",
      "param": "password",
      "location": "body"
    }
  ]
}

User Already Exists
Status Code: 400 Bad Request
Response Body: A JSON object containing an error message.
Example: {
  "message": "User already exist"
}

Notes
Ensure that the Content-Type header is set to application/json when making the request.
The password is hashed before being stored in the database.
