import{d as m,r as u,o as a,c as f,a as s,F as _,b as h,e as v,f as y}from"./vendor.fc6ec004.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};L();const I=s("div",{class:"siimple-navbar siimple-navbar--green siimple-navbar--fluid"},[s("div",{class:"siimple-navbar-title"},"LoginForm Sample1")],-1),k={class:"siimple-content siimple-content--large"},x=s("label",{class:"siimple-label"},"User ID ",-1),F=s("br",null,null,-1),C=["value"],j=s("br",null,null,-1),w=s("label",{class:"siimple-label"},"Password",-1),B=["value"],N=s("br",null,null,-1),P=s("br",null,null,-1),S=s("br",null,null,-1),O=m({props:{msg:{type:String,required:!0}},emits:["login"],setup(o,{emit:i}){const n=u(""),l=u(""),e=(r,d)=>{const{target:p}=r;p instanceof HTMLInputElement&&(d.value=p.value)},t=r=>{e(r,n)},c=r=>{e(r,l)},b=()=>{i("login")},g=()=>{n.value="",l.value=""};return(r,d)=>(a(),f(_,null,[I,s("div",k,[x,F,s("input",{type:"text",class:"siimple-input siimple-input--fluid",id:"userId",value:n.value,onInput:t},null,40,C),j,w,s("input",{type:"text",class:"siimple-input siimple-input--fluid",id:"password",value:l.value,onInput:c},null,40,B),N,P,S,s("div",{class:"siimple-field"},[s("button",{class:"login-button siimple-btn siimple-btn--fluid siimple--text-bold",onClick:g}," Reset ")]),s("div",{class:"siimple-field"},[s("button",{class:"login-button siimple-btn siimple-btn--primary siimple-btn--fluid siimple--text-bold",onClick:b}," Login ")])])],64))}});var $=(o,i)=>{for(const[n,l]of i)o[n]=l;return o};const E={},q=h('<div class="siimple-navbar siimple-navbar--green siimple-navbar--fluid"><div class="siimple-navbar-title">LoginForm Sample1</div></div><div class="siimple-content siimple-content--large"><div class="siimple-jumbotron"><div class="siimple-jumbotron-title">Hello!</div><div class="siimple-jumbotron-subtitle">Login process is succeeded.</div></div></div>',2);function A(o,i){return q}var H=$(E,[["render",A]]);const M=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/siimple@3.3.1/dist/siimple.min.css"},null,-1),R=m({setup(o){const i=u("loginForm"),n=()=>{i.value="postLogin"};return(l,e)=>(a(),f(_,null,[M,i.value==="loginForm"?(a(),v(O,{key:0,msg:"Login Form",onLogin:n})):(a(),v(H,{key:1}))],64))}});y(R).mount("#app");
