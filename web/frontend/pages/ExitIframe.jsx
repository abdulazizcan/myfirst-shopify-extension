import { Redirect } from "@shopify/app-bridge/actions";
import { useAppBridge, Loading } from "@shopify/app-bridge-react";
<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
=======
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Banner, Layout, Page } from "@shopify/polaris";
>>>>>>> a488cb48b870fe3020f5bde13277795c3ca8a518

export default function ExitIframe() {
  const app = useAppBridge();
  const { search } = useLocation();
<<<<<<< HEAD
=======
  const [showWarning, setShowWarning] = useState(false);
>>>>>>> a488cb48b870fe3020f5bde13277795c3ca8a518

  useEffect(() => {
    if (!!app && !!search) {
      const params = new URLSearchParams(search);
      const redirectUri = params.get("redirectUri");
      const url = new URL(decodeURIComponent(redirectUri));

<<<<<<< HEAD
      if (url.hostname === location.hostname) {
=======
      if (
        [location.hostname, "admin.shopify.com"].includes(url.hostname) ||
        url.hostname.endsWith(".myshopify.com")
      ) {
>>>>>>> a488cb48b870fe3020f5bde13277795c3ca8a518
        const redirect = Redirect.create(app);
        redirect.dispatch(
          Redirect.Action.REMOTE,
          decodeURIComponent(redirectUri)
        );
<<<<<<< HEAD
      }
    }
  }, [app, search]);

  return <Loading />;
=======
      } else {
        setShowWarning(true);
      }
    }
  }, [app, search, setShowWarning]);

  return showWarning ? (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <div style={{ marginTop: "100px" }}>
            <Banner title="Redirecting outside of Shopify" status="warning">
              Apps can only use /exitiframe to reach Shopify or the app itself.
            </Banner>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  ) : (
    <Loading />
  );
>>>>>>> a488cb48b870fe3020f5bde13277795c3ca8a518
}
