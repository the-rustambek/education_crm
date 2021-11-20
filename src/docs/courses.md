## Course Route Request

#### 1. Course Create Post Endpoint

#####   Request

SERVER_URL/courses/

Headers:
        `Content-type: "application/json"`


Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| name      | Course name   | String       |  True        |
| description  | Course description        | String       | true         |
| price      | Course Price   | String       |  True        |
| photo      | Course Photo   | File       |  True        |


 ##### Response status codes

`201 - Course created successfully `
`400 - name   ||  description || price || photo  is invalid`
`500 - Internal Server Error`  











## Course Get Endpoint

#####   Request

SERVER_URL/courses

Headers:
        `Content-type: "application/json"
        Authorization: "TOKEN"`

Permissions: Admin

Query body:

| Name      | Default    | Type  | Required |
| --------- | -----------    |------ | -------  |
| limit     | 15     | Number       |  false        |
| offset   | 0      | Number     | false         |

 ##### Response status codes

`200 - Courses `
`500 - Internal Server Error` 



## Course One Get Endpoint

#### Request

SERVER_URL/courses/:course:id

Headers: `Content-type: "application/json" Authorization:"TOKEN"`


Permissions: Admin

Query body:

| Name      | Default    | Type  | Required |
| --------- | -----------    |------ | -------  |
| limit     | 15     | Number       |  false        |
| offset   | 0      | Number     | false         |



Request body:

| Name      | Default    | Type  | Required |
| --------- | -----------    |------ | -------  |
| course_id    | Course UUID    | UUID       |  true        |




 ##### Response status codes

`200 - OK `
`500 - Internal Server Error` 






## Course Update Put Endpoint

#### Request

SERVER_URL/teachers/:teacher_id

Headers: `Content-type: "application/json" Authorization:"TOKEN"`




Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| name   | Course name  | String    |  true        |
| description   | Course description  | String    |  true        |
| price   | Course price  | String    |  true        | 
|photo   | Course Photo  | File    |  true        |
| course_id   | Course's unique UUID(req.params.teacher_id) | String    |  true        |




 ##### Response status codes

`200 - Updated successfully `
`400 - name || description || price  is invalid `
`500 - Internal Server Error` 


