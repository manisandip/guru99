$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "LogIn",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "user should be able to login with valid credentials",
  "description": "",
  "id": "login;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters valid \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be able to ligin successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 13,
      "id": "login;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "mngr276457",
        "vAmYjuh"
      ],
      "line": 14,
      "id": "login;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheLoginPage()"
});
formatter.result({
  "duration": 128259100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user should be able to login with valid credentials",
  "description": "",
  "id": "login;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters valid \"mngr276457\" and \"vAmYjuh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be able to ligin successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mngr276457",
      "offset": 19
    },
    {
      "val": "vAmYjuh",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.userEntersValidAnd(String,String)"
});
formatter.result({
  "duration": 3080600,
  "error_message": "java.lang.NullPointerException\r\n\tat Web1.Utils.EnterText(Utils.java:9)\r\n\tat Web1.LogInPage.userEntersDetails(LogInPage.java:11)\r\n\tat Web1.MyStepdefs.userEntersValidAnd(MyStepdefs.java:16)\r\n\tat ✽.When user enters valid \"mngr276457\" and \"vAmYjuh\"(src/test/resources/Features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToLiginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
});