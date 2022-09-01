# Marqo.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocuments**](DefaultApi.md#addDocuments) | **POST** /indexes/{index_name}/documents | Add Documents
[**createIndex**](DefaultApi.md#createIndex) | **POST** /indexes/{index_name} | Create Index
[**deleteDocuments**](DefaultApi.md#deleteDocuments) | **POST** /indexes/{index_name}/documents/delete-batch | Delete Docs
[**deleteIndex**](DefaultApi.md#deleteIndex) | **DELETE** /indexes/{index_name} | Delete Index
[**getCluster**](DefaultApi.md#getCluster) | **GET** / | Root
[**getDocument**](DefaultApi.md#getDocument) | **GET** /indexes/{index_name}/documents/{document_id} | Get Document By Id
[**getIndexStats**](DefaultApi.md#getIndexStats) | **GET** /indexes/{index_name}/stats | Get Index Stats
[**refreshIndex**](DefaultApi.md#refreshIndex) | **POST** /indexes/{index_name}/refresh | Refresh Index
[**search**](DefaultApi.md#search) | **POST** /indexes/{index_name}/search | Search

<a name="addDocuments"></a>
# **addDocuments**
> Object addDocuments(body, indexName, opts)

Add Documents

add_documents endpoint

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let body = null; // [Object] | 
let indexName = "indexName_example"; // String | 
let opts = { 
  'refresh': true, // Boolean | 
  'batchSize': 0, // Number | 
  'processes': 1 // Number | 
};
apiInstance.addDocuments(body, indexName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Object]**](Object.md)|  | 
 **indexName** | **String**|  | 
 **refresh** | **Boolean**|  | [optional] [default to true]
 **batchSize** | **Number**|  | [optional] [default to 0]
 **processes** | **Number**|  | [optional] [default to 1]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIndex"></a>
# **createIndex**
> Object createIndex(indexName, opts)

Create Index

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.createIndex(indexName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**|  | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocuments"></a>
# **deleteDocuments**
> Object deleteDocuments(body, indexName, opts)

Delete Docs

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let body = ["body_example"]; // [String] | 
let indexName = "indexName_example"; // String | 
let opts = { 
  'refresh': true // Boolean | 
};
apiInstance.deleteDocuments(body, indexName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[String]**](String.md)|  | 
 **indexName** | **String**|  | 
 **refresh** | **Boolean**|  | [optional] [default to true]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIndex"></a>
# **deleteIndex**
> Object deleteIndex(indexName)

Delete Index

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.deleteIndex(indexName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCluster"></a>
# **getCluster**
> Object getCluster()

Root

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
apiInstance.getCluster((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> Object getDocument(indexName, documentId)

Get Document By Id

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 
let documentId = "documentId_example"; // String | 

apiInstance.getDocument(indexName, documentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**|  | 
 **documentId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIndexStats"></a>
# **getIndexStats**
> Object getIndexStats(indexName)

Get Index Stats

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.getIndexStats(indexName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshIndex"></a>
# **refreshIndex**
> Object refreshIndex(indexName)

Refresh Index

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.refreshIndex(indexName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="search"></a>
# **search**
> Object search(body, indexName)

Search

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
let body = new Marqo.SearchQuery(); // SearchQuery | 
let indexName = "indexName_example"; // String | 

apiInstance.search(body, indexName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchQuery**](SearchQuery.md)|  | 
 **indexName** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

