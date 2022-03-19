import { mock, MockConfig } from "mocker-api-faster";

// GET
import fixUsersGet200 from "../fixtures/users/users.get.200.json";
import fixUsersGet200details from "../fixtures/users/users.get.200.details.json";
// POST
import fixUsersPost201 from "../fixtures/users/users.post.201.json";
import fixUsersPost400 from "../fixtures/users/users.post.400.json";
import fixUsersPost400Conflict from "../fixtures/users/users.post.400.conflict.json";

const url = "/users";

const users: MockConfig[] = [
  {
    url,
    method: "get",
    expected: {
      fixtures: {
        200: {
          fixture: {
            base: fixUsersGet200,
          },
          body: {
            nameCustomBody: "John Doe",
          },
        },
      },
      globalHeaders: {
        "custom-header": "{{custom-header}}",
      },
      globalBody: {
        myCustomJson: {
          name: "John Doe",
        },
      },
    },
  },
  {
    url: `${url}/:id`,
    method: "get",
    expected: {
      fixtures: {
        200: {
          fixture: {
            base: fixUsersGet200details,
          },
        },
      },
    },
  },
  {
    url,
    method: "post",
    expected: {
      fixtures: {
        201: {
          fixture: {
            base: fixUsersPost201,
          },
          headers: {
            "custom-header-201": "{{custom-header-201}}",
          },
        },
        400: {
          fixture: {
            base: fixUsersPost400,
            conflict: fixUsersPost400Conflict,
          },
        },
      },
      globalHeaders: {
        "custom-header": "{{custom-header}}",
      },
    },
  },
];

mock.setMany(users);
