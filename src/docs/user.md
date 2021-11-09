## User Route Request

#### 1. User Sign In Post Endpoint

#####   Request

SERVER_URL/USERS/sign_in

Headers:
        `Content-type: "application/json"`


Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| user_name      | User's  username (5,32,unique)       | String       |  True        |
| user_password   | User's password (5, 128)        | String       | true         |


 ##### Response status codes

`201 - Token created succesfully `
`400 - Username   ||  Password is incorrect`
`500 - Internal Server Error`  


