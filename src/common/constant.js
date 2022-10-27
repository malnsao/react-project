// 过滤不展示头的页面
const filterHeaderComp = (route) =>
  ![
    "/depositwithdraw",
    "/personal",
    "/settings",
    "/myaccount",
    "/privatemessage",
    "/discount",
  ].includes(route);

// 过滤不展示底部的页面
const filterFooterComp = (route) =>
  ![
    "/depositwithdraw",
    "/personal",
    "/settings",
    "/notfound",
    "/privatemessage",
  ].includes(route);

// 过滤不展示移动端Tabbar的页面
const filterTabbarComp = (route) =>
  !["/depositwithdraw", "/settings", "/privatemessage", "/helpcenter"].includes(
    route,
  );

export { filterHeaderComp, filterFooterComp, filterTabbarComp };
