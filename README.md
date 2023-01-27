# NestJS Integration Testing Coverage

## To Run

```shell
test:e2e:cov
```

### Sample Output

```shell
> nest-coverage-test@0.0.1 test:e2e:cov
> nyc --silent npm run start & sleep 5 && npm run test:e2e && npx kill-port 3000 && nyc report


> nest-coverage-test@0.0.1 start
> nest start

[Nest] 12244  - 01/27/2023, 4:59:56 PM     LOG [NestFactory] Starting Nest application...
[Nest] 12244  - 01/27/2023, 4:59:56 PM     LOG [InstanceLoader] AppModule dependencies initialized +21ms
[Nest] 12244  - 01/27/2023, 4:59:56 PM     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 12244  - 01/27/2023, 4:59:56 PM     LOG [RouterExplorer] Mapped {/, GET} route +1ms
[Nest] 12244  - 01/27/2023, 4:59:56 PM     LOG [NestApplication] Nest application successfully started +2ms

> nest-coverage-test@0.0.1 test:e2e
> jest --config ./test/jest-e2e.json

 PASS  test/app.e2e-spec.ts
  √ Query Server (32 ms)

Test Suites: 1 passed, 1 total                                                                                                                                   
Tests:       1 passed, 1 total                                                                                                                                   
Snapshots:   0 total
Time:        1.784 s, estimated 2 s
Ran all test suites.
Process on port 3000 killed
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |       0 |      100 |       0 |       0 |                  
 app.controller.ts |       0 |      100 |       0 |       0 | 1-10             
 app.module.ts     |       0 |      100 |     100 |       0 | 1-10             
 app.service.ts    |       0 |      100 |       0 |       0 | 1-6              
 main.ts           |       0 |      100 |       0 |       0 | 5-8              
-------------------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 0% ( 0/22 )
Branches     : 100% ( 0/0 )
Functions    : 0% ( 0/4 )
Lines        : 0% ( 0/16 )
================================================================================

Process finished with exit code 0

```