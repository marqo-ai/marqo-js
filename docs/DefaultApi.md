# Marqo.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentsIndexesIndexNameDocumentsPost**](DefaultApi.md#addDocumentsIndexesIndexNameDocumentsPost) | **POST** /indexes/{index_name}/documents | Add Documents
[**createIndexIndexesIndexNamePost**](DefaultApi.md#createIndexIndexesIndexNamePost) | **POST** /indexes/{index_name} | Create Index
[**deleteDocsIndexesIndexNameDocumentsDeleteBatchPost**](DefaultApi.md#deleteDocsIndexesIndexNameDocumentsDeleteBatchPost) | **POST** /indexes/{index_name}/documents/delete-batch | Delete Docs
[**deleteIndexIndexesIndexNameDelete**](DefaultApi.md#deleteIndexIndexesIndexNameDelete) | **DELETE** /indexes/{index_name} | Delete Index
[**getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet**](DefaultApi.md#getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet) | **GET** /indexes/{index_name}/documents/{document_id} | Get Document By Id
[**getIndexStatsIndexesIndexNameStatsGet**](DefaultApi.md#getIndexStatsIndexesIndexNameStatsGet) | **GET** /indexes/{index_name}/stats | Get Index Stats
[**refreshIndexIndexesIndexNameRefreshPost**](DefaultApi.md#refreshIndexIndexesIndexNameRefreshPost) | **POST** /indexes/{index_name}/refresh | Refresh Index
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Root
[**searchIndexesIndexNameSearchPost**](DefaultApi.md#searchIndexesIndexNameSearchPost) | **POST** /indexes/{index_name}/search | Search

<a name="addDocumentsIndexesIndexNameDocumentsPost"></a>
# **addDocumentsIndexesIndexNameDocumentsPost**
> Object addDocumentsIndexesIndexNameDocumentsPost(body, indexName, opts)

Add Documents

add_documents endpoint

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let body = null; // [Object] | 
let indexName = "indexName_example"; // String | 
let opts = { 
  'refresh': true, // Boolean | 
  'batchSize': 0, // Number | 
  'processes': 1 // Number | 
};
apiInstance.addDocumentsIndexesIndexNameDocumentsPost(body, indexName, opts, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createIndexIndexesIndexNamePost"></a>
# **createIndexIndexesIndexNamePost**
> Object createIndexIndexesIndexNamePost(indexName, opts)

Create Index

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 
let opts = { 
  'body': null // Object | 
};
apiInstance.createIndexIndexesIndexNamePost(indexName, opts, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDocsIndexesIndexNameDocumentsDeleteBatchPost"></a>
# **deleteDocsIndexesIndexNameDocumentsDeleteBatchPost**
> Object deleteDocsIndexesIndexNameDocumentsDeleteBatchPost(body, indexName, opts)

Delete Docs

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let body = ["body_example"]; // [String] | 
let indexName = "indexName_example"; // String | 
let opts = { 
  'refresh': true // Boolean | 
};
apiInstance.deleteDocsIndexesIndexNameDocumentsDeleteBatchPost(body, indexName, opts, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIndexIndexesIndexNameDelete"></a>
# **deleteIndexIndexesIndexNameDelete**
> Object deleteIndexIndexesIndexNameDelete(indexName)

Delete Index

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.deleteIndexIndexesIndexNameDelete(indexName, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet"></a>
# **getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet**
> Object getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet(indexName, documentId)

Get Document By Id

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 
let documentId = "documentId_example"; // String | 

apiInstance.getDocumentByIdIndexesIndexNameDocumentsDocumentIdGet(indexName, documentId, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIndexStatsIndexesIndexNameStatsGet"></a>
# **getIndexStatsIndexesIndexNameStatsGet**
> Object getIndexStatsIndexesIndexNameStatsGet(indexName)

Get Index Stats

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.getIndexStatsIndexesIndexNameStatsGet(indexName, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshIndexIndexesIndexNameRefreshPost"></a>
# **refreshIndexIndexesIndexNameRefreshPost**
> Object refreshIndexIndexesIndexNameRefreshPost(indexName)

Refresh Index

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let indexName = "indexName_example"; // String | 

apiInstance.refreshIndexIndexesIndexNameRefreshPost(indexName, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootGet"></a>
# **rootGet**
> Object rootGet()

Root

### Example
```javascript
import {Marqo} from 'marqo';

let apiInstance = new Marqo.DefaultApi();
apiInstance.rootGet((error, data, response) => {
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

<a name="searchIndexesIndexNameSearchPost"></a>
# **searchIndexesIndexNameSearchPost**
> Object searchIndexesIndexNameSearchPost(body, indexName)

Search

### Example
```javascript
import {Marqo} from 'marqo';
let defaultClient = Marqo.ApiClient.instance;
// Configure HTTP basic authorization: HTTPBasic
let HTTPBasic = defaultClient.authentications['HTTPBasic'];
HTTPBasic.username = 'YOUR USERNAME';
HTTPBasic.password = 'YOUR PASSWORD';

let apiInstance = new Marqo.DefaultApi();
let body = new Marqo.SearchQuery(); // SearchQuery | 
let indexName = "indexName_example"; // String | 

apiInstance.searchIndexesIndexNameSearchPost(body, indexName, (error, data, response) => {
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

[HTTPBasic](../README.md#HTTPBasic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

