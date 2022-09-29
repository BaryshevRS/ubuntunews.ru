import { compress } from "../lib/utils";

export const ga = compress(`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-17349676-1', {
    page_path: window.location.pathname,
    });`);

export const ym = compress(`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(2978071, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true
    });`);
