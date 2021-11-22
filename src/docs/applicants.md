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
| gender      | Applicant gender ["male","email]   | String       |  True        |
| birth_date  | Applicant birth_date        | Date       | true         |
| description  | Applicant description        | String       | true         |
| phone  | Applicant phone        | String       | true         |
| source      | Applicant source   | String       |  True        |
| course_id      | Applicant course_id(which course want to join)  | UUID       |  True        |


 ##### Response status codes

`201 - applicant created successfully `
`400 - name   || birth_date || phone ||  description  is invalid`
`500 - Internal Server Error`  



