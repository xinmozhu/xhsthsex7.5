(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.components,l=()=>(0,t.createElement)("details",null,(0,t.createElement)("summary",null,(0,t.createElement)("strong",null,credit.links)),(0,t.createElement)("span",{className:"span1Style"},(0,t.createElement)("div",null,credit.plugin_version," |",(0,t.createElement)("a",{className:"aStyle",href:credit.faq,target:"_blank",rel:"noopener noreferrer"},"FAQ")," | ",(0,t.createElement)("a",{className:"aStyle",href:credit.support,target:"_blank",rel:"noopener noreferrer"},"Support Forums")," | ",(0,t.createElement)("a",{className:"aStyle",href:credit.review,target:"_blank",rel:"noopener noreferrer"},"Reviews")),(0,t.createElement)("div",null,(0,t.createElement)("a",{className:"aStyle",href:credit.translate,target:"_blank",rel:"noopener noreferrer"},credit.translate_text)," | ",(0,t.createElement)("a",{className:"aStyle",href:credit.facebook,target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{class:"dashicons dashicons-facebook"}))," | ",(0,t.createElement)("a",{className:"aStyle",href:credit.twitter,target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{class:"dashicons dashicons-twitter"}))," | ",(0,t.createElement)("a",{className:"aStyle",href:credit.youtube,target:"_blank",rel:"noopener noreferrer"},(0,t.createElement)("span",{class:"dashicons dashicons-video-alt3"}))),(0,t.createElement)("div",{className:"boxStyle"},(0,t.createElement)("h3",null,credit.donate_text),(0,t.createElement)("div",{className:"divStyle"},(0,t.createElement)("span",{className:"span2Style"},"Plugin Author")," ",(0,t.createElement)("span",{className:"span1Style"},"Katsushi Kawamori")),(0,t.createElement)(a.Button,{className:"button button-large",href:credit.donate,target:"_blank"},credit.donate_button)))),n=window.wp.apiFetch;var s=e.n(n);const r=e=>{let l=Math.round(e.p_count/e.max_count*100);const n=[];n.push((0,t.createElement)(t.Fragment,null,(0,t.createElement)("progress",{value:l,max:"100"}),"  ",e.p_count," / ",e.max_count,"  |  ",l," %"));const s=[];return s.push((0,t.createElement)(t.Fragment,null,n)),100==l&&s.push((0,t.createElement)(a.Notice,{status:"success",onRemove:()=>{window.location.reload()}},e.text)),(0,t.createElement)("div",null,s)},c=()=>{const e=JSON.parse(pluswebpgenerate_data.post_ids),[l,n]=(0,t.useState)(0),[c,p]=(0,t.useState)(!1),i=e.length,o=(0,t.useRef)(!0);(0,t.useEffect)((()=>{if(o.current)o.current=!1;else try{(async()=>{for(let t=0;t<i;t++)await s()({path:"rf/plus-webp-generate_api/token",method:"POST",data:{post_id:e[t],count:t+1,max_count:i,generate:c}}).then((e=>{e.generate?n(t+1):window.location.reload()}))})()}catch(e){console.log(e)}}),[c]);const m=[],u=[],d=[],g=[],b=[];return c?(u.push((0,t.createElement)(r,{p_count:l,max_count:i,text:pluswebpgenerate_data.generate_end_label,updatecurrentProgress:n,updatecurrentSubmit:p})),0<l&&l<i&&g.push((0,t.createElement)(a.Button,{className:"button button-large",onClick:()=>{p(!1)}},pluswebpgenerate_data.stop_label))):i!==l?(m.push((0,t.createElement)("p",{className:"description"},pluswebpgenerate_data.generate_description)),d.push((0,t.createElement)(a.Button,{className:"button button-large",onClick:()=>{p(!0)}},pluswebpgenerate_data.generate_label))):m.push((0,t.createElement)("p",{className:"description"},pluswebpgenerate_data.non_description)),b.push((0,t.createElement)(a.Button,{className:"button button-large",onClick:()=>{window.location.reload()}},pluswebpgenerate_data.check_label)),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h2",null,pluswebpgenerate_data.bulk_label),(0,t.createElement)("b",null,(0,t.createElement)("li",null,pluswebpgenerate_data.generate_description_label)),(0,t.createElement)("b",null,(0,t.createElement)("li",null,pluswebpgenerate_data.description_label)),m,d,"    ",g,"    ",b,u)},p=()=>{const e=JSON.parse(pluswebpsettings_data.settings),[l,n]=(0,t.useState)(e);(0,t.useEffect)((()=>{s()({path:"rf/plus-webp-settings_api/token",method:"POST",data:{quality:l.quality,types:l.types,replace:l.replace,addext:l.addext}}).then((e=>{}))}),[l]);const r=[];void 0!==l&&r.push((0,t.createElement)(a.RangeControl,{max:100,min:1,value:l.quality,className:"range_width",onChange:e=>{l.quality=e;let t=Object.assign({},l);n(t)}}));const c=[];if(void 0!==l){let e=!1;l.types.includes("image/jpeg")&&(e=!0),c.push((0,t.createElement)(a.ToggleControl,{label:"image/jpeg",checked:e,onChange:e=>{if(e)l.types.push("image/jpeg");else{let e="image/jpeg",t=l.types.indexOf(e);l.types.splice(t,1)}let t=Object.assign({},l);n(t)}}));let s=!1;l.types.includes("image/png")&&(s=!0),c.push((0,t.createElement)(a.ToggleControl,{label:"image/png",checked:s,onChange:e=>{if(e)l.types.push("image/png");else{let e="image/png",t=l.types.indexOf(e);l.types.splice(t,1)}let t=Object.assign({},l);n(t)}}));let r=!1;l.types.includes("image/bmp")&&(r=!0),c.push((0,t.createElement)(a.ToggleControl,{label:"image/bmp",checked:r,onChange:e=>{if(e)l.types.push("image/bmp");else{let e="image/bmp",t=l.types.indexOf(e);l.types.splice(t,1)}let t=Object.assign({},l);n(t)}}));let p=!1;l.types.includes("image/gif")&&(p=!0),c.push((0,t.createElement)(a.ToggleControl,{label:"image/gif",checked:p,onChange:e=>{if(e)l.types.push("image/gif");else{let e="image/gif",t=l.types.indexOf(e);l.types.splice(t,1)}let t=Object.assign({},l);n(t)}}))}const p=[];void 0!==l&&p.push((0,t.createElement)(a.ToggleControl,{label:pluswebpsettings_data.apply_label,checked:l.addext,onChange:e=>{l.addext=e;let t=Object.assign({},l);n(t)}}));const i=[];return void 0!==l&&i.push((0,t.createElement)(a.ToggleControl,{label:pluswebpsettings_data.apply_label,checked:l.replace,onChange:e=>{l.replace=e;let t=Object.assign({},l);n(t)}})),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h2",null,pluswebpsettings_data.settings_label),(0,t.createElement)("div",{className:"settings"},(0,t.createElement)("h3",null,pluswebpsettings_data.quality_label),(0,t.createElement)("div",{className:"settings2"},r,(0,t.createElement)("p",{className:"description"},pluswebpsettings_data.quality_description_label))),(0,t.createElement)("div",{className:"settings"},(0,t.createElement)("h3",null,pluswebpsettings_data.type_label),(0,t.createElement)("div",{className:"settings2"},c,(0,t.createElement)("p",{className:"description"},pluswebpsettings_data.type_description_label))),(0,t.createElement)("div",{className:"settings"},(0,t.createElement)("h3",null,pluswebpsettings_data.append_label),(0,t.createElement)("div",{className:"settings2"},p,(0,t.createElement)("p",{className:"description"},pluswebpsettings_data.append_description_label))),(0,t.createElement)("div",{className:"settings"},(0,t.createElement)("h3",null,pluswebpsettings_data.replace_label),(0,t.createElement)("div",{className:"settings2"},i,(0,t.createElement)("p",{className:"description"},pluswebpsettings_data.replace_description_label))))};(0,t.render)((0,t.createElement)((()=>(0,t.createElement)("div",{className:"wrap"},(0,t.createElement)("h2",null,"Plus WebP"),(0,t.createElement)(l,null),(0,t.createElement)("hr",null),(0,t.createElement)(c,null),(0,t.createElement)("hr",null),(0,t.createElement)(p,null))),null),document.getElementById("plus-webp-page"))})();