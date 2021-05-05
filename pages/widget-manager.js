import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import {
  CalloutCard,
  MediaCard,
  Card,
  List,
  Button,
  Stack,
} from "@shopify/polaris";

const CREATE_SCRIPT_TAG = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const WidgetManager = () => {
  const [createScriptTag] = useMutation(CREATE_SCRIPT_TAG);

  return (
    <>
      <CalloutCard
        title="Inject Widgets to your Thank you page"
        illustration="https://cdn.shopify.com/s/files/1/0563/6456/4656/files/Logo-Topikon-lang-ohne-claim.jpg?v=1620205232"
        primaryAction={{
          content: "Get To Know Us",
          url: "https://www.shopify.com",
        }}
      >
        <p>
          Add Customized Widgets to the "Thank You Page" and get instant
          Feedback from your buyers!
        </p>
      </CalloutCard>
      <br />
      <MediaCard
        title="Getting Started"
        primaryAction={{
          content: "Select Widget",
          onAction: () => {},
        }}
        description="Discover our widgets and pick the most suitable for your customers, it can be changed anytime!"
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://cdn.shopify.com/s/files/1/0563/6456/4656/files/Frame_21_1.png?v=1620205535"
        />
      </MediaCard>
      <br />
      <Card title="Selected Widget">
        <Card.Section title="Items">
          <List>
            <List.Item> Basic Widget </List.Item>
          </List>
        </Card.Section>
        <br />
        <Button
          fullWidth
          primary
          type="submit"
          onClick={() => {
            createScriptTag({
              variables: {
                input: {
                  src: "https://30c55ab11d73.ngrok.io/widget-script.js",
                  displayScope: "ORDER_STATUS",
                },
              },
            });
          }}
        >
          Activate Script
        </Button>
      </Card>
    </>
  );
};

export default WidgetManager;
