import{d as m,r as u,o as a,c as f,a as s,F as _,b,e as v,f as h}from"./vendor.fc6ec004.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();const L=s("div",{class:"siimple-navbar siimple-navbar--green siimple-navbar--fluid"},[s("div",{class:"siimple-navbar-title"},"LoginForm Sample1")],-1),I={class:"siimple-content siimple-content--large"},k=s("label",{class:"siimple-label"},"User ID ",-1),F=s("br",null,null,-1),x=["value"],B=s("br",null,null,-1),j=s("label",{class:"siimple-label"},"Password",-1),w=["value"],N=s("br",null,null,-1),P=s("br",null,null,-1),S=s("br",null,null,-1),C=m({props:{msg:{type:String,required:!0}},emits:["login"],setup(l,{emit:i}){const n=u(""),o=u(""),e=(r,d)=>{const{target:p}=r;p instanceof HTMLInputElement&&(d.value=p.value)},t=r=>{e(r,n)},c=r=>{e(r,o)},g=()=>{i("login")};return(r,d)=>(a(),f(_,null,[L,s("div",I,[k,F,s("input",{type:"text",class:"siimple-input siimple-input--fluid",id:"userId",value:n.value,onInput:t},null,40,x),B,j,s("input",{type:"text",class:"siimple-input siimple-input--fluid",id:"password",value:o.value,onInput:c},null,40,w),N,P,S,s("div",{class:"siimple-field"},[s("div",{class:"siimple-btn siimple-btn--navy siimple-btn--fluid siimple--text-bold",id:"loginBtn",onClick:g}," Login ")])])],64))}});var O=(l,i)=>{for(const[n,o]of i)l[n]=o;return l};const $={},E=b('<div class="siimple-navbar siimple-navbar--green siimple-navbar--fluid"><div class="siimple-navbar-title">LoginForm Sample1</div></div><div class="siimple-content siimple-content--large"><div class="siimple-jumbotron"><div class="siimple-jumbotron-title">Hello!</div><div class="siimple-jumbotron-subtitle">Login process is succeeded.</div></div></div>',2);function q(l,i){return E}var A=O($,[["render",q]]);const H=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/siimple@3.3.1/dist/siimple.min.css"},null,-1),M=m({setup(l){const i=u("loginForm1"),n=()=>{i.value="loginForm2"};return(o,e)=>(a(),f(_,null,[H,i.value==="loginForm1"?(a(),v(C,{key:0,msg:"Login Form",onLogin:n})):(a(),v(A,{key:1}))],64))}});h(M).mount("#app");
