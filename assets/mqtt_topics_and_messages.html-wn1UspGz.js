import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as o,a as n,b as s,d as l,w as c,e as d}from"./app-aFM3-XTt.js";const r={},u=n("h1",{id:"mqtt-topics-and-messages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mqtt-topics-and-messages"},[n("span",null,"MQTT Topics and Messages")])],-1),p=n("code",null,"rfxcom2MQTT",-1),m=n("code",null,"config.yaml",-1),v=d(`<h2 id="rfxcom2mqtt-bridge-info" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-bridge-info"><span>rfxcom2MQTT/bridge/info</span></a></h2><p>Contains information of the bridge. Whenever one of the attributes in the payload changes, this is republished. Example payload:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;receiverTypeCode&quot;</span><span class="token operator">:</span> <span class="token number">83</span><span class="token punctuation">,</span>
  <span class="token property">&quot;receiverType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;433.92MHz transceiver&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hardwareVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firmwareVersion&quot;</span><span class="token operator">:</span> <span class="token number">242</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firmwareType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ext&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;enabledProtocols&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;LIGHTING4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;LACROSSE&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;AC&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;OREGON&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;HOMECONFORT&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transmitterPower&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rfxcom2mqtt-bridge-state" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-bridge-state"><span>rfxcom2MQTT/bridge/state</span></a></h2><p>Contains the state of the bridge, this message is published as retained. Payloads are:</p><ul><li><code>online</code>: published when the bridge is running (on startup)</li><li><code>offline</code>: published right before the bridge stops</li></ul><h3 id="rfxcom2mqtt-devices-to-receive-incoming-messages" tabindex="-1"><a class="header-anchor" href="#rfxcom2mqtt-devices-to-receive-incoming-messages"><span>rfxcom2mqtt/devices** to receive incoming messages.</span></a></h3><p>Contains information of an device.</p><p>Example payload on topic <code>&quot;rfxcom2mqtt/devices/0x01A4F9BE/2&quot;</code>:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   {
    &quot;seqnbr&quot;: 4,
    &quot;subtype&quot;: 0,
    &quot;id&quot;: &quot;0x01A4F9BE&quot;,
    &quot;unitCode&quot;: 2,
    &quot;commandNumber&quot;: 0,
    &quot;command&quot;: &quot;Off&quot;,
    &quot;level&quot;: 0,
    &quot;rssi&quot;: 4,
    &quot;type&quot;: &quot;lighting2&quot;,
    &quot;deviceName&quot;: [
        &quot;KlikAanKlikUit&quot;,
        &quot;HomeEasy UK&quot;,
        &quot;Chacon&quot;,
        &quot;NEXA&quot;,
        &quot;Intertechno&quot;
    ],
    &quot;subTypeValue&quot;: &quot;AC&quot;
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="publish-command-examples-topic-payload" tabindex="-1"><a class="header-anchor" href="#publish-command-examples-topic-payload"><span>Publish command examples (topic/payload)</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    rfxcom2mqtt/cmd/lighting2/0/0x01A4F9BE/2/set
    on

    rfxcom2mqtt/cmd/lighting2/0/0x01A4F9BE/2/set
    off

    rfxcom2mqtt/cmd/lighting2/0/0x01A4F9BE/2/set
    level 15

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function q(b,h){const e=t("RouterLink");return i(),o("div",null,[u,n("p",null,[s("This page describes which MQTT topics are used by Rfxcom2MQTT. Note that the base topic (by default "),p,s(") is configurable in the "),l(e,{to:"/configuration/"},{default:c(()=>[s("Rfxcom2MQTT "),m]),_:1}),s(".")]),v])}const x=a(r,[["render",q],["__file","mqtt_topics_and_messages.html.vue"]]);export{x as default};
