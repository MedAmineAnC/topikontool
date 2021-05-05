setTimeout(() => {
  (function (w, d, s, o, f, js, fjs) {
    w["TopikonWidget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(
    window,
    document,
    "script",
    "tw",
    "https://topikonpublic.blob.core.windows.net/widget/tw.js"
  );
  tw("init", {});
  tw("discover", { className: "topikonwidget" });
}, 500);

Shopify.Checkout.OrderStatus.addContentBox(
  '<div class="topikonwidget" data-widget-id="b45dbaa8-0050-4418-869a-3056fa0659e5"></div>'
);
