## Group route request

#### 1. Group create post Endpoint

#### Request

SERVER_URL/groups/  method = POST

Headers: `Content-Type: "application/json"`

Permissions:`Admin`

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




#### 2. Group Get Endpoint

#### Request


SERVER_URL/groups/   method =  GET

Headers: `Content-Type: "application/json"   Authorization: "TOKEN"`


Permissions:`Admin`

Query body:



| Name      | Default    | Type  | Required |
| --------- | -----------    |------ | -------  |
| limit   | 15   | Number       |  false        |
| offset   | 0   | Number       |  false        |

## Response status codes


` `200 - OK`
`500 - Internal server Error 






{
    ok:true,
    message: "Successfully created",
    data:{
        groups
    }
}





#### 3. Group Update Endpoint

#### Request


SERVER_URL/groups/:group_name   method =  PUT


Headers: `Content-Type: "application/json"   Authorization: "TOKEN"`


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

## Response status codes


` `201 - Group updated successfully`
`400 -  One of the arguments is incorrect
500 - Internal Server Error
`


#### 4. Add Applicant To Group Post Endpoint

#### Request


SERVER_URL/groups/student  method =  POST


Headers: `Content-Type: "application/json"`


Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| applicant_id   | applicant_id   | UUID   |  True        |
| group_id   | group_id   | UUID   |  True        |

## Response status codes


` `201 -  Applicant added to course succesfully`
`400 -  Applicand_id || group_id is invalid
500 - Internal Server Error
`




#### 5. Delete Student From Group delete Endpoint

#### Request


SERVER_URL/groups/student/:student_id  method = DELETE

Headers: `Content-Type: "application/json"`


Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| student_id   | 	ID of student(must be given from request.params)  | UUID   |  True        |


## Response status codes


` `201 -  Student deleted succesfully`
`400 -  Student_id is invalid || Student not found
500 - Internal Server Error
`
















