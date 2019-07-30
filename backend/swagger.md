# mock-server
## Version: 1.0.1

**License:** ISC


### /posts

#### GET
##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No content |

#### POST
##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| title | formData |  | Yes | string |
| content | formData |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No content |

### /posts/{id}

#### GET
##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | double |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No content |

#### PUT
##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| title | formData |  | Yes | string |
| content | formData |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No content |

#### DELETE
##### Description:



##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204 | No content |

