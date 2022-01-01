"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(7059);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js



const GAScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    }));
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    var ref;
    (ref = window.gtag) === null || ref === void 0 ? void 0 : ref.call(window, 'event', action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.js



const PlausibleScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    }));
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    var ref;
    return (ref = window.plausible) === null || ref === void 0 ? void 0 : ref.call(window, eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js


const SimpleAnalyticsScript = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    }));
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        var ref;
        return (ref = window.sa_event) === null || ref === void 0 ? void 0 : ref.call(window, eventName, callback);
    } else {
        var ref1;
        return (ref1 = window.sa_event) === null || ref1 === void 0 ? void 0 : ref1.call(window, eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/index.js





const isProduction = "production" === 'production';
const Analytics = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {
            }),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {
            }),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {
            })
        ]
    }));
};
/* harmony default export */ const analytics = (Analytics);

;// CONCATENATED MODULE: ./data/headerNavLinks.js
const headerNavLinks = [
    {
        href: '/blog',
        title: 'Blog'
    },
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/geschichte',
        title: 'Geschichte'
    },
    {
        href: '/team',
        title: 'Team'
    },
    {
        href: '/drinks',
        title: 'Drinks-Snacks'
    },
    {
        href: '/sportarena',
        title: 'Sportarena'
    },
    {
        href: '/event',
        title: 'Event'
    },
    {
        href: '/Kontact',
        title: 'Wohin?'
    }
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9072);
// EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
var social_icons = __webpack_require__(4642);
;// CONCATENATED MODULE: ./components/Footer.js

/* eslint-disable prettier/prettier */ 


function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-red-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center mt-16",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-3 space-x-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "facebook",
                            href: (siteMetadata_default()).facebook,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "youtube",
                            href: (siteMetadata_default()).youtube,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "twitter",
                            href: (siteMetadata_default()).twitter,
                            size: "6"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-2 space-x-2 text-sm text-gray-300 dark:text-gray-400 font-mono ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: (siteMetadata_default()).title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-8 text-sm font-mono text-gray-300 dark:text-gray-400",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "All rights reserved:",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-yellow-400 font-sans",
                                children: [
                                    " Medicus Design ",
                                    ` • `,
                                    " Basel Schweiz"
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/MobileNav.js




const MobileNav = ()=>{
    const { 0: navShow , 1: setNavShow  } = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "w-8 h-8 ml-1 mr-1 rounded",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: navShow ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${navShow ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        "aria-label": "toggle modal",
                        className: "fixed w-full h-full cursor-auto focus:outline-none",
                        onClick: onToggleNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed h-full mt-8",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title)
                        )
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.js



const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",
        onClick: ()=>setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
        ,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === 'dark' || resolvedTheme === 'dark') ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    }));
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/icons/svg/phoneillustra.js

/* eslint-disable prettier/prettier */ 
const SvgPhoneillustra = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "5em",
        height: "5em",
        viewBox: "0 0 210 297",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#a3a3a3',
                    strokeWidth: 0.264583
                },
                d: "M39.315 122.186c.003-.583.057-.79.12-.46.063.329.06.805-.005 1.058-.067.253-.118-.016-.115-.598zm43.345-1.875c.013-.308.076-.37.16-.16.077.192.067.42-.02.508-.089.088-.151-.069-.14-.348zm-1.658-15.636c.191-.077.42-.067.508.02.087.088-.069.15-.348.14-.308-.013-.37-.076-.16-.16zm-5.01-2.135c-.33-.42-.32-.429.1-.1.254.2.462.408.462.463 0 .218-.217.078-.563-.363zm-26.056-5.225c0-2.038.042-2.836.092-1.775.05 1.062.05 2.729 0 3.704-.052.976-.093.108-.092-1.93zm22.224.132c0-1.965.042-2.768.092-1.786.051.982.051 2.59 0 3.572-.05.982-.092.179-.092-1.786zm16.909 1.852c0-.8.05-1.128.11-.728.06.4.06 1.055 0 1.456-.06.4-.11.072-.11-.728zm-32.425-8.642c.182-.073.48-.073.662 0 .182.074.033.134-.331.134s-.513-.06-.33-.134zm8.202 0c.182-.073.48-.073.662 0 .182.074.033.134-.33.134-.365 0-.514-.06-.332-.134zm3.721-6.09c.191-.077.42-.068.507.02.088.088-.068.15-.347.14-.308-.014-.371-.076-.16-.16zm-11.655-.272c.329-.063.805-.06 1.058.006s-.016.118-.598.115c-.582-.003-.79-.057-.46-.12zm7.144 0c.329-.063.805-.06 1.058.006s-.016.118-.598.115c-.582-.003-.79-.057-.46-.12z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#fde800',
                    strokeWidth: 0.264583
                },
                d: "M40.84 124.765c.008-4.215.357-6.363 1.355-8.342.457-.905 2.72-4.649 5.027-8.32l4.197-6.672v-6.1h3.704v5.556h11.906V95.33h3.704v5.806l4.365 7.013c2.4 3.856 4.75 7.75 5.223 8.65l.859 1.64.098 4.717.098 4.718h-40.54Zm15.87-10.65v-1.322h-3.704v2.646h3.704zm6.299.067-.08-1.257h-3.705l-.08 1.257-.081 1.257h4.026zm6.137-.066v-1.323h-3.704v2.646h3.704zm-12.436-4.234v-1.323h-3.704v2.646h3.704zm6.299-.066.08-1.257h-3.998v1.147c0 .63.085 1.23.188 1.334.103.103.966.152 1.918.11l1.731-.077zm6.137.066v-1.323h-3.704v2.646h3.704zm-12.436-4.498v-1.322h-3.704v2.645h3.704zm6.35 0v-1.322h-3.968v2.645h3.968zm6.086 0v-1.322h-3.704v2.645h3.704zm-32.708-2.479c-1.177-.537-1.688-1.401-1.688-2.853v-1.245l.858.246c2.16.62 6.294.17 8.865-.964l1.39-.613-.002 1.242c0 1.782-.74 2.847-2.553 3.677-1.84.842-5.542 1.117-6.87.51zm44.614-.153c-3.249-.606-4.762-1.872-4.762-3.984v-1.284l1.52.617c2.327.944 4.54 1.285 7.374 1.137l2.532-.132-.176 1.22c-.274 1.899-.965 2.426-3.336 2.548-1.079.055-2.497 0-3.152-.122zm-45.604-5.229c-.419-.107-.467-.29-.319-1.214.252-1.578 1.755-5.986 2.19-6.42.883-.883 8.877-2.9 14.232-3.59 3.405-.44 15.303-.444 18.653-.007 3.817.497 8.725 1.543 11.725 2.498l2.695.857.742 1.528c.878 1.81 1.982 5.884 1.677 6.19-.118.118-1.198.255-2.401.306-2.279.095-4.035-.232-6.802-1.269-1.454-.545-1.497-.59-1.672-1.753-.323-2.157-2.384-3.815-5.862-4.716-3.748-.971-12.311-1.179-16.688-.404-2.494.441-4.66 1.25-5.748 2.147-1.04.858-1.991 2.547-2.002 3.557-.006.617-1.525 1.363-4.257 2.09-1.35.36-5.074.48-6.163.2z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#a29500',
                    strokeWidth: 0.264583
                },
                d: "M50.975 127.94c5.65-.04 14.818-.04 20.373 0 5.556.04.933.073-10.272.073s-15.75-.033-10.1-.073zm-10.098-7.474c0-.364.06-.513.134-.331.073.182.073.48 0 .661-.074.182-.134.034-.134-.33zm40.196-1.213c.013-.308.075-.37.16-.16.076.191.067.42-.021.507-.088.088-.15-.068-.139-.347zm-21.87-5.137.02-1.19h3.705l.022 1.19.021 1.19-.102-1.124-.102-1.125H59.386l-.103 1.125-.102 1.124.021-1.19zm-5.337-1.251a11.515 11.515 0 0 1 1.984 0c.546.057.1.103-.992.103-1.091 0-1.538-.046-.992-.103zm12.436 0a11.515 11.515 0 0 1 1.984 0c.546.057.1.103-.992.103s-1.538-.046-.992-.103zm-12.436-1.852a11.515 11.515 0 0 1 1.984 0c.546.057.1.103-.992.103-1.091 0-1.538-.046-.992-.103zm5.337-.165c-.08-.21-.1-.84-.041-1.4.1-.97.107-.958.15.236l.044 1.257h3.411l.107-1.257.108-1.257-.027 1.323-.027 1.323-1.79.078c-1.367.06-1.824-.011-1.935-.303zm7.099.165a11.515 11.515 0 0 1 1.984 0c.546.057.1.103-.992.103s-1.538-.046-.992-.103zm-7.131-5.629c0-.8.05-1.127.11-.727s.06 1.055 0 1.455c-.06.4-.11.073-.11-.728zm3.704 0c0-.8.05-1.127.11-.727s.06 1.055 0 1.455c-.06.4-.11.073-.11-.728zm18.657-2.562c.19-.076.419-.067.507.021.088.088-.069.15-.348.14-.308-.013-.37-.076-.16-.16zm-23.418-2.133c1.718-.046 4.457-.046 6.086 0 1.629.047.223.084-3.124.084s-4.68-.038-2.962-.084zm-23.562-.993c.003-.582.057-.79.12-.46.064.33.061.805-.005 1.058s-.118-.016-.115-.598zm41.54-1.323c.003-.582.057-.789.12-.46.063.33.061.805-.005 1.058s-.118-.016-.115-.598zm5.704.745c.191-.076.42-.067.507.021.088.088-.068.15-.347.14-.308-.014-.37-.076-.16-.16zm-35.872-.877c0-.51.054-.718.12-.463.067.254.067.671 0 .926-.066.254-.12.046-.12-.463zm-8.458-.455c.402-.06.997-.059 1.323.004.325.063-.004.112-.732.11-.727-.002-.994-.053-.591-.114zm46.166.003a3.77 3.77 0 0 1 1.19 0c.328.063.06.115-.595.115s-.923-.052-.595-.115zm-37.718-2.591c.005-.437.065-.583.132-.326.067.258.062.615-.01.794-.072.18-.127-.031-.122-.468zm30.153-.132c0-.364.06-.513.133-.331.074.182.074.48 0 .661-.073.182-.133.034-.133-.33zm-21.258-5.737c.19-.077.419-.067.507.02.088.089-.069.151-.347.14-.309-.013-.371-.076-.16-.16zm11.906 0c.19-.077.42-.067.507.02.088.089-.068.151-.347.14-.308-.013-.371-.076-.16-.16zm-8.748-.26c.182-.073.48-.073.662 0 .182.074.033.134-.331.134s-.513-.06-.33-.133zm5.165-.007c.257-.068.614-.063.793.01.18.072-.031.127-.468.121-.436-.005-.583-.064-.325-.131zm-10.97-2.908c.192-.077.42-.067.508.02.088.089-.068.151-.347.14-.309-.013-.371-.076-.16-.16zm17.199 0c.19-.077.419-.067.507.02.088.089-.068.151-.347.14-.309-.013-.371-.076-.16-.16zm-14.172-.266c.255-.067.671-.067.926 0 .255.066.046.12-.463.12-.51 0-.718-.054-.463-.12zm10.319 0c.254-.067.671-.067.926 0 .254.066.046.12-.463.12-.51 0-.718-.054-.463-.12zM50.84 84.83c.19-.077.42-.067.507.02.088.089-.068.151-.347.14-.308-.013-.371-.076-.16-.16z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#5d5d5d',
                    strokeWidth: 0.264583
                },
                d: "M39.35 126.287c0-1.82.042-2.564.094-1.654.051.91.051 2.398 0 3.307-.052.91-.094.166-.094-1.653zm43.398-1.191c0-2.474.04-3.522.088-2.328.05 1.193.05 3.217 0 4.498-.048 1.28-.088.304-.088-2.17zm-45.666-20.421c.19-.077.419-.067.507.02.088.088-.069.15-.348.14-.308-.013-.37-.076-.16-.16zm2.629.006c.182-.074.48-.074.661 0 .182.073.033.133-.33.133-.364 0-.513-.06-.331-.133zm42.069 0c.182-.074.48-.074.661 0 .182.073.033.133-.33.133-.364 0-.513-.06-.331-.133zm2.927-.006c.19-.077.419-.067.507.02.088.088-.069.15-.348.14-.308-.013-.37-.076-.16-.16zm-19.21-8.088-.055-2.844 3.373.057 3.374.057-3.232.083-3.232.084-.086 2.703-.086 2.704zm-32.314.441c.013-.308.076-.37.16-.16.077.191.067.42-.02.507-.089.088-.151-.068-.14-.347zm18.577-3.217c.989-.051 2.537-.05 3.44 0 .903.052.095.094-1.797.094-1.892-.001-2.63-.043-1.643-.094zm4.107-3.16c.191-.076.42-.066.507.022.088.087-.068.15-.347.138-.308-.012-.371-.075-.16-.16zm10.054 0c.191-.076.42-.066.507.022.088.087-.068.15-.347.138-.308-.012-.37-.075-.16-.16zm4.498-5.82c.191-.077.42-.067.507.02.088.089-.068.151-.347.14-.308-.013-.371-.076-.16-.16zm-16.669-.265c.191-.076.42-.067.507.021.088.088-.068.15-.347.14-.308-.014-.37-.076-.16-.16zm14.023 0c.191-.076.42-.067.507.021.088.088-.068.15-.347.14-.308-.014-.37-.076-.16-.16zm-8.218-.279a24.086 24.086 0 0 1 2.778 0c.764.054.139.097-1.39.097-1.527 0-2.152-.043-1.388-.097z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#847900',
                    strokeWidth: 0.264583
                },
                d: "M38.391 103.345c.33-.063.805-.06 1.058.005.253.066-.016.118-.598.115-.582-.003-.789-.057-.46-.12zm28.471-5.369c0-1.528.044-2.153.098-1.389.053.764.053 2.014 0 2.778-.054.764-.098.14-.098-1.389zm-7.036-8.925a13.254 13.254 0 0 1 2.117.002c.542.056.033.102-1.132.101-1.164 0-1.607-.047-.985-.103z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#605800',
                    strokeWidth: 0.264583
                },
                d: "M81.42 124.699c0-1.964.042-2.768.093-1.786.05.982.05 2.59 0 3.572-.051.982-.093.179-.093-1.786zm-15.903-10.451c.002-.728.054-.994.114-.592.061.403.06.998-.003 1.323-.063.326-.113-.004-.11-.731zm0-4.498c.002-.728.054-.994.114-.592.061.403.06.998-.003 1.323-.063.326-.113-.004-.11-.73zm-.028-4.3-.047-1.388 1.786.05 1.786.052-1.64.093-1.64.094-.098 1.244-.099 1.245zm-11.496-1.315c.47-.058 1.303-.06 1.852-.002.549.057.164.105-.854.106-1.019.001-1.468-.045-.998-.104zm6.36 0c.476-.06 1.19-.058 1.588.002.397.06.008.109-.865.107-.873-.002-1.198-.05-.723-.11zm-25.108-1.86c-.329-.419-.32-.428.1-.1.255.2.463.409.463.464 0 .217-.217.077-.563-.363zm19.933-4.221-.055-2.7-1.918-.092-1.919-.091 1.927-.053c1.394-.038 1.964.045 2.061.298.074.193.095 1.473.047 2.845l-.088 2.493zm12.711-2.916a11.52 11.52 0 0 1 1.984 0c.546.057.1.103-.992.103-1.091 0-1.538-.046-.992-.103zm-7.8-9.524c.475-.06 1.19-.058 1.587.002.398.06.009.109-.865.107-.873-.001-1.198-.05-.722-.11z",
                transform: "translate(-117.022 6.296)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                style: {
                    fill: '#010101',
                    strokeWidth: 0.264583
                },
                d: "M39.517 125.03c.008-7.279.198-7.796 6.58-17.914l3.999-6.339v-6.77h6.614V99.3h8.996v-5.292h6.35v6.756l4.4 7.007c2.42 3.854 4.772 7.781 5.226 8.727l.825 1.72.085 5.622.085 5.623H39.512l.005-4.432zm42.062.132c-.002-3.814-.38-7.082-.947-8.19-.245-.48-2.573-4.284-5.172-8.454l-4.727-7.583v-5.892l-1.918.077-1.918.078-.076 2.712-.075 2.712h-11.34l-.075-2.712-.076-2.712-1.918-.078-1.918-.077v6.154l-4.18 6.658c-6.65 10.592-6.404 9.966-6.404 16.238v4.046h40.746l-.002-2.977zm-28.573-10.914v-1.19h3.704v2.38h-3.704zm6.35 0v-1.19h3.44v2.38h-3.44zm6.35 0v-1.19h3.44v2.38h-3.44zm-12.7-4.498v-1.19h3.704v2.38h-3.704zm6.35 0v-1.19h3.44v2.38h-3.44zm6.35 0v-1.19h3.44v2.38h-3.44zm-12.7-4.3v-1.256l1.852.088 1.852.088V106.707h-3.704v-1.256zm6.35 0v-1.256h3.44v2.513h-3.44zm6.35.09v-1.169l1.72-.088 1.72-.09V106.708h-3.44v-1.168zm-29.187-.95c-.7-.124-1.551-.407-1.892-.63-2.24-1.468-1.863-7.506.84-13.436l.924-2.028 3.214-1.06c6.869-2.264 13.267-3.062 23.059-2.877 9.107.172 14.184.943 20.68 3.142l2.424.82 1.178 2.545c1.612 3.483 1.911 4.73 1.911 7.968 0 3.33-.336 4.325-1.691 5.005-2.066 1.036-6.511.87-9.158-.34-2.429-1.113-3.287-2.889-3.3-6.83-.006-2.185-.29-3.263-1.009-3.848-.977-.793-3.352-1.678-5.521-2.056-2.678-.467-10.782-.54-13.666-.122-3.83.555-6.596 2.271-6.904 4.283-.072.476-.186 1.843-.251 3.038-.193 3.487-1.454 5.167-4.52 6.02-1.776.493-4.738.683-6.318.405zm6.183-1.724c2.297-.81 3.425-2.327 3.425-4.605v-1.027l-1.805.758c-2.929 1.23-6.47 1.565-9.23.873-.55-.138-.607-.061-.607.81 0 1.944.78 3.018 2.63 3.622.912.298 4.252.04 5.587-.431zm44.207-.575c.414-.414.614-1.003.702-2.064l.123-1.484-.761.212c-.419.116-1.833.205-3.143.196-2.36-.016-5.285-.68-7.077-1.606l-.728-.376v1.073c0 3.238 2.534 4.801 7.6 4.689 2.386-.053 2.774-.129 3.284-.64zM40.721 97.69c.863-.159 2.433-.646 3.488-1.083 1.71-.71 1.918-.873 1.918-1.509 0-.392.268-1.237.595-1.878.757-1.48 2.787-2.643 5.838-3.344 1.791-.412 3.241-.498 8.384-.498 7.07 0 9.251.32 12.163 1.785 1.89.951 2.906 2.281 2.914 3.818.004.807.092.875 2.148 1.668 2.489.96 5.676 1.49 7.381 1.23 2.028-.31 2.048-.353 1.337-2.861-.343-1.21-.951-2.935-1.351-3.833l-.728-1.633-2.473-.79c-6.474-2.065-13.2-3.004-21.524-3.004-8.304 0-14.66.901-21.066 2.987l-2.546.83-.684 1.665c-.763 1.857-1.865 5.932-1.66 6.137.557.556 3.638.72 5.866.313z",
                transform: "translate(-117.022 6.296)"
            })
        ]
    })
;
/* harmony default export */ const phoneillustra = (SvgPhoneillustra);

// EXTERNAL MODULE: ./components/icons/svg/SvgLogoNeu.js
var SvgLogoNeu = __webpack_require__(5731);
;// CONCATENATED MODULE: ./components/LayoutWrapper.js

/* eslint-disable prettier/prettier */ 








const LayoutWrapper = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col justify-between minh-screen bg-gray-800",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex items-center justify-between py-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/",
                                "aria-label": "Tailwind CSS Blog",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mr-3 flex flex-row justify around gap-10 items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(SvgLogoNeu/* default */.Z, {
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(phoneillustra, {
                                                })
                                            ]
                                        }),
                                        typeof (siteMetadata_default()).headerTitle === 'string' ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden h-6 text-sm text-gray-400 font-semibold sm:block",
                                            children: (siteMetadata_default()).headerTitle
                                        }) : (siteMetadata_default()).headerTitle
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: link.href,
                                            className: "p-1 font-bold font-sans text-gray-200 hover:text-yellow-400 hover:border-b hover: border-yellow-400 sm:p-4 lg:text-2xl dark:text-gray-100",
                                            children: link.title
                                        }, link.title)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                })
            ]
        })
    }));
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/ClientReload.js


/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */ const ClientReload = ()=>{
    // Exclude socket.io from prod bundle
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4612)).then((module)=>{
            const socket = module.io();
            socket.on('reload', (data)=>{
                router_default().replace((router_default()).asPath, undefined, {
                    scroll: false
                });
            });
        });
    }, []);
    return null;
};

;// CONCATENATED MODULE: ./pages/_app.js









const isDevelopment = "production" === 'development';
const isSocket = process.env.SOCKET;
function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
        attribute: "class",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            isDevelopment && isSocket && /*#__PURE__*/ jsx_runtime_.jsx(ClientReload, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
};


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664,373,59,211,731], () => (__webpack_exec__(4248)));
module.exports = __webpack_exports__;

})();