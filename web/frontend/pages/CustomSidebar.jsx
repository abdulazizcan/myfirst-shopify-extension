import React from "react";
import "../assets/style.css";
import { useNavigate } from "@shopify/app-bridge-react";
import { Link, Icon } from "@shopify/polaris";
import { HomeMajor, MarketingMajor } from "@shopify/polaris-icons";

const CustomSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <Link
            removeUnderline
            url="https://admin.shopify.com/store/canaapp/apps/lucrative-infrastructure-app-1/">
            <Icon source={HomeMajor} color="subdued" />
          </Link>
        </div>
        <div className="sidebar-content">
          <ul className="list">
            <li className="list-item">
              <div className="list-item-inside">
                <Icon source={MarketingMajor} color="subdued" />
                <span className="span-item-inside">
                  <Link
                    removeUnderline
                    monochrome
                    url="https://admin.shopify.com/store/canaapp/apps/lucrative-infrastructure-app-1/pro-seo"
                  >
                    Products Seo
                  </Link>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomSidebar;
