## Applicant Route Request

#### 1. Applicant Create Post Endpoint

#####   Request

SERVER_URL/applicants/

Headers:
        `Content-type: "application/json"`


Request body:

| Name      | Description    | Type  | Required |
| --------- | -----------    |------ | -------  |
| name      | Applicant name   | String       |  True        |
| gender      | Applicant gender ["male","email"]   | String       |  True        |
| birth_date  | Applicant birth_date        | DATE     | true         |
| description  | Applicant description        | String       | true         |
| phone  | Applicant phone        | String       | true         |
| source      | Applicant source   | String       |  True        |
| course_id      | Applicant course_id(which course want to join)  | UUID       |  True        |


 ##### Response status codes

`201 - applicant created successfully `
`400 - name   || birth_date || phone ||  description  is invalid`
`500 - Internal Server Error`  











#### 2. Course get Endpoint

#####   Request

SERVER_URL/applicants/

Headers:
        `Content-type: "application/json"
        Authorization: "TOKEN"`

Permissions: Admin

Query body:

 | Name      | Default    | Type  | Required |
 | --------- | -----------    |------ |  -----|
| limit      | 15    | Number  | false |
| offset      | 0    | Number  | false |


##### Response status codes

`200 - OK`
`500- Internal server error`






#### 3.  Applicant Put Endpoint

#####   Request

SERVER_URL/applicants/:applicant_id

Headers:
        `Content-type: "application/json"
        Authorization: "TOKEN"`

Permissions: Admin

Request body:

 | Name      | Description    | Type  | Required |
 | --------- | -----------    |------ |  -----|
| name     |  Applicant name    | String  | true |
| gender      | Applicant gender["male","female"]  | String  | true |
| birth_date     |  Applicant birth_date  | DATE  | true |
| description     |  Applicant description    | String  | true |
| phone     |  Applicant phone    | String  | true |
| source     |  Applicant source    | String  | true |
| status     |  Applicant status    | String  | true |
| course_id     |  Applicant course_id(which course want to join)    | UUID  | true |


##### Response status codes

`200 - Applicant updated successfully`
`400 - name ||  description || birth_date || phone   is invalid`
`500- Internal server error`