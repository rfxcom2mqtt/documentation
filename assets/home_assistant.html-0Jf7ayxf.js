import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as a,c as r,a as e,b as t,d as n,e as c}from"./app-0zUBJs_4.js";const l={},d=e("h1",{id:"home-assistant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#home-assistant"},[e("span",null,"Home Assistant")])],-1),h=e("h2",{id:"mqtt-discovery",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mqtt-discovery"},[e("span",null,"MQTT discovery")])],-1),m={href:"https://www.home-assistant.io/integrations/mqtt#mqtt-discovery",target:"_blank",rel:"noopener noreferrer"},_=c(`<p>To achieve the best possible integration (including MQTT discovery):</p><ul><li>In your <strong>Rfxcom2MQTT</strong> <code>config.yaml</code> set</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>homeassistant:
  discovery: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={href:"https://www.home-assistant.io/integrations/mqtt/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"home-assistant-device-registry",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#home-assistant-device-registry"},[e("span",null,"Home Assistant device registry")])],-1),g={href:"https://developers.home-assistant.io/docs/en/device_registry_index.html",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"entity_id",-1),p=e("code",null,"friendly_name",-1);function T(y,x){const s=i("ExternalLinkIcon");return a(),r("div",null,[d,h,e("p",null,[t("The easiest way to integrate Rfxcom2MQTT with Home Assistant is by using "),e("a",m,[t("MQTT discovery"),n(s)]),t(". This allows Rfxcom2MQTT to automatically add devices to Home Assistant.")]),_,e("ul",null,[e("li",null,[t("Enable the "),e("a",u,[t("MQTT integration"),n(s)]),t(" in Home Assistant")])]),v,e("p",null,[t("When using Home Assistant MQTT discovery, Rfxcom2MQTT integrates with the "),e("a",g,[t("Home Assistant device registry"),n(s)]),t(". This allows you to change the Home Assistant "),f,t(" and "),p,t(" from the Home Assistant web interface without having to restart Home Assistant. It also makes it possible to show which entities belong to which device.")])])}const A=o(l,[["render",T],["__file","home_assistant.html.vue"]]);export{A as default};
