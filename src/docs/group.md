## Group route request

#### 1. Group create post Endpoint

#### Request

SERVER_URL/groups/  method = POST

Headers: `Content-Type: "application/json"`

Request body:



| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| time   | Group time (o'clock)   | String       |  True        |
| status      | ["active","waiting","cancelled"]   | String       |  True        |
| lesson_duration  | group lesson_duration        | INTEGER     | true         |
| course_duration  | course_duration       | INTEGER       | true         |
| schedule | schedule of group         | Array       | true         |
| course_id      | course_id   | UUID     |  True        |
| teacher_id     | teacher_id | UUID       |  True        |


 ##### Response status codes

`201 - Group created successfully `
`400 - One of the arguments is incorrect`
`500 - Internal Server Error`  


