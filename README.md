### Usage

1. Clone the Examples project
2. install the dependencies `yarn` or `npm install`
3. Make the requests and see the results

### **cURL**

**List Mocks**

```bash
curl --request GET \
  --url http://localhost:8000/mocks
```

**List all - 1s Delay - Base fixture**

```bash
curl --request GET \
  --url http://localhost:8000/users \
  --header 'expected-delay: 1000' \
  --header 'expected-fixture-type: base' \
  --header 'expected-status-code: 200'
```

**Find - 1s Delay - Base fixture**

```bash
  curl --request GET \
  --url http://localhost:8000/users/123 \
  --header 'expected-delay: 1000' \
  --header 'expected-fixture-type: base' \
  --header 'expected-status-code: 200'
```

**Create - Success - 1s Delay - Base Fixture**

```bash
  curl --request POST \
    --url http://localhost:8000/users \
    --header 'Content-Type: application/json' \
    --header 'expected-delay: 1000' \
    --header 'expected-fixture-type: base' \
    --header 'expected-status-code: 201' \
    --data '{}'
```

**Create - Conflict - 1s Delay - Conflict Fixture**

```bash
  curl --request POST \
    --url http://localhost:8000/users \
    --header 'Content-Type: application/json' \
    --header 'expected-delay: 1000' \
    --header 'expected-fixture-type: conflict' \
    --header 'expected-status-code: 400' \
    --data '{}'
```

**Create - Bad Request - 1s Delay - Base Fixture**

```bash
  curl --request POST \
   --url http://localhost:8000/users \
   --header 'Content-Type: application/json' \
   --header 'expected-delay: 1000' \
   --header 'expected-fixture-type: base' \
   --header 'expected-status-code: 400' \
   --data '{}'
```
