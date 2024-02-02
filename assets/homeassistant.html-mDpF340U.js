import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as o,a as s,b as n,d as l,w as c,e as r}from"./app-0zUBJs_4.js";const d={},p=s("h1",{id:"home-assistant-integration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#home-assistant-integration"},[s("span",null,"Home Assistant integration")])],-1),m=r(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Optional: Home Assistant integration (MQTT discovery) (default: false)</span>
<span class="token key atrule">homeassistant</span><span class="token punctuation">:</span> 
  <span class="token key atrule">discovery</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration"><span>Advanced configuration</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>
  <span class="token comment"># Optional: Home Assistant enable discovery (default: true)</span>
  <span class="token key atrule">discovery</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Optional: Home Assistant discovery topic (default: shown below)</span>
  <span class="token comment"># Note: should be different from [MQTT base topic](../mqtt.md) to prevent errors in HA software</span>
  <span class="token key atrule">discovery_topic</span><span class="token punctuation">:</span> <span class="token string">&#39;homeassistant&#39;</span>
  <span class="token comment"># Optional: Home Assistant device prefix</span>
  <span class="token key atrule">discovery_device</span><span class="token punctuation">:</span> <span class="token string">&#39;rfxcom2mqtt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(v,k){const a=t("RouterLink");return i(),o("div",null,[p,s("p",null,[n("See: "),l(a,{to:"/usage/integrations/home_assistant.html"},{default:c(()=>[n("Home Assistant integration guide")]),_:1}),n(".")]),m])}const f=e(d,[["render",u],["__file","homeassistant.html.vue"]]);export{f as default};
