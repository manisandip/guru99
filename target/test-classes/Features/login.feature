Feature: LogIn

  Background:
    Given user is on the login page

  @login

  Scenario Outline: user should be able to login with valid credentials

    When user enters valid "<userid>" and "<password>"
    Then user should be able to ligin successfully
    Examples:
      | userid     | password |
      | mngr276457 | vAmYjuh  |