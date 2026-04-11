(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CountUp.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CountUp(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "19fd70b08542e59cf15de309d81ef426b8a324bea8094fc09225827ebb5ab926") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19fd70b08542e59cf15de309d81ef426b8a324bea8094fc09225827ebb5ab926";
    }
    const { value, suffix: t1, duration: t2 } = t0;
    const suffix = t1 === undefined ? "" : t1;
    const duration = t2 === undefined ? 800 : t2;
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t3;
    let t4;
    if ($[1] !== duration || $[2] !== value) {
        t3 = ({
            "CountUp[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t5)=>{
                    const [entry] = t5;
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        let start = 0;
                        const end = value;
                        const increment = end / (duration / 16);
                        const counter = setInterval({
                            "CountUp[useEffect() > <anonymous> > setInterval()]": ()=>{
                                start = start + increment;
                                start;
                                if (start >= end) {
                                    setCount(end);
                                    clearInterval(counter);
                                } else {
                                    setCount(Math.floor(start));
                                }
                            }
                        }["CountUp[useEffect() > <anonymous> > setInterval()]"], 16);
                    }
                }, {
                    threshold: 0.4
                });
                if (ref.current) {
                    observer.observe(ref.current);
                }
                return ()=>observer.disconnect();
            }
        })["CountUp[useEffect()]"];
        t4 = [
            value,
            duration
        ];
        $[1] = duration;
        $[2] = value;
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] !== count || $[6] !== suffix) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: ref,
            children: [
                count,
                suffix
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CountUp.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[5] = count;
        $[6] = suffix;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s(CountUp, "lKCxpPtoTj/gf3ANhT1pbLWypxk=");
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Contact = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "823629ae40201a4990724e5e4ba8167668ada642b9a22bf0eacce135fefa814d") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "823629ae40201a4990724e5e4ba8167668ada642b9a22bf0eacce135fefa814d";
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = async (e)=>{
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            ;
            try {
                const res = await fetch("https://formspree.io/f/mqedloav", {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (res.ok) {
                    form.reset();
                    setShowSuccess(true);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    setTimeout(()=>{
                        setShowSuccess(false);
                    }, 3000);
                } else {
                    alert("Submission failed. Please try again.");
                }
            } catch (t1) {
                alert("Something went wrong.");
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleSubmit = t0;
    let t1;
    if ($[2] !== showSuccess) {
        t1 = showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-6 left-1/2 -translate-x-1/2 bg-[#629FAD] z-50  text-white px-6 py-4 rounded-xl shadow-lg animate-fadeIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-lg",
                children: "✅ Form submitted successfully"
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.jsx",
                lineNumber: 57,
                columnNumber: 156
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 57,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = showSuccess;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[#0E6BA8] text-[30px] text-center mb-[15px] md:text-[40px] mt-[30px]",
            children: [
                "Get in Touch ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "With Us!"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 65,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[22px] md:text-[38px] font-semibold mb-[8px]",
            children: [
                "Quick ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-extrabold",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 72,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex mb-[10px] text-[14px] md:text-[20px] items-center font-bold gap-[5px] border-b-2 pb-[5px] border-white ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhone"], {}, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 79,
                            columnNumber: 143
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 79,
                    columnNumber: 136
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "+44 7761 2642 41"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 79,
                    columnNumber: 161
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] md:w-[70%] mx-auto text-white flex items-center-safe gap-[10px] justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[50%]",
                    children: [
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex text-[14px] md:text-[20px] items-center gap-[5px] font-bold mt-[1px] border-b-2 pb-[5px] border-white ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                                            fileName: "[project]/src/components/Contact.jsx",
                                            lineNumber: 86,
                                            columnNumber: 280
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 86,
                                    columnNumber: 273
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sade@careviasolutions.org"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.jsx",
                                    lineNumber: 86,
                                    columnNumber: 301
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 86,
                            columnNumber: 148
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 86,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/contact2.png",
                        width: 200,
                        height: 300,
                        alt: "contact-image",
                        className: "ml-[12px] md:w-[250px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.jsx",
                        lineNumber: 86,
                        columnNumber: 356
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 86,
                    columnNumber: 351
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold",
            children: "England"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " mt-[30px] bg-gradient-to-r from-[#0C2C55] to-[#296374]/90 h-auto pt-[20px] pb-[28px]  ",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto w-[90%] mt-[20px] text-white text-[17px] text-center md:text-[18.5px]",
                    children: [
                        "We provide nationwide coverage across ",
                        t6,
                        " and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "Wales"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 101,
                            columnNumber: 259
                        }, ("TURBOPACK compile-time value", void 0)),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 101,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[100%] text-center text-[20px] font-semibold mt-[30px] text-[#0E6BA8] underline",
            children: "Make Enquires below"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    let t10;
    let t11;
    let t12;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            placeholder: "Your Name",
            className: "outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            name: "email",
            placeholder: "Your Email",
            className: "outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "tel",
            name: "phone",
            placeholder: "Your Phone",
            className: "outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            name: "date",
            className: "outline-none rounded-[10px] lg:block hidden border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]",
            placeholder: "Date"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 117,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
        $[14] = t9;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
        t9 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "mb-[30px] flex flex-col gap-[25px] w-[80%] mx-auto mt-[30px]",
            children: [
                t9,
                t10,
                t11,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative lg:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            name: "date",
                            required: true,
                            className: "peer outline-none rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55] w-full bg-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 130,
                            columnNumber: 169
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "\r\n      absolute left-[10px] top-[50%] -translate-y-1/2\r\n      text-gray-500 bg-white px-1\r\n      peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0C2C55]\r\n      peer-valid:top-0 peer-valid:text-sm\r\n      transition-all\r\n    ",
                            children: "Date"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.jsx",
                            lineNumber: 130,
                            columnNumber: 330
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 130,
                    columnNumber: 133
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "message",
                    placeholder: "Message",
                    className: "outline-none h-[200px] rounded-[10px] border-[1.5px] px-[10px] py-[8px] border-[#0C2C55]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 130,
                    columnNumber: 612
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-gradient-to-r from-[#0C2C55] to-[#296374]/90 p-2 font-semibold rounded-[10px] text-white",
                    children: "SUBMIT YOUR MESSAGE NOW"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.jsx",
                    lineNumber: 130,
                    columnNumber: 762
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 130,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== t1) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "contact",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    t1,
                    t2,
                    t7,
                    t8,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.jsx",
                lineNumber: 137,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t1;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    return t14;
};
_s(Contact, "XWH8CCyysg3Y0bSpeZNITeCAHAY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/herofont1_ab27bd58.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "herofont1_ab27bd58-module__oaVq2a__className",
  "variable": "herofont1_ab27bd58-module__oaVq2a__variable",
});
}),
"[project]/src/app/utils/herofont1_ab27bd58.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont1_ab27bd58$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont1_ab27bd58.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont1_ab27bd58$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'heroFont1', 'heroFont1 Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont1_ab27bd58$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont1_ab27bd58$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/herofont2_68386bc6.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "herofont2_68386bc6-module__1ozIJW__className",
  "variable": "herofont2_68386bc6-module__1ozIJW__variable",
});
}),
"[project]/src/app/utils/herofont2_68386bc6.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont2_68386bc6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont2_68386bc6.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont2_68386bc6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'heroFont2', 'heroFont2 Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont2_68386bc6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont2_68386bc6$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/herofont3_6d00b718.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "herofont3_6d00b718-module__Wd3jTq__className",
  "variable": "herofont3_6d00b718-module__Wd3jTq__variable",
});
}),
"[project]/src/app/utils/herofont3_6d00b718.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont3_6d00b718.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'heroFont3', 'heroFont3 Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/font.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont1_ab27bd58$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont1_ab27bd58.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont2_68386bc6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont2_68386bc6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont3_6d00b718.js [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
;
;
;
}),
"[project]/src/app/utils/herofont3_6d00b718.js [app-client] (ecmascript) <export default as heroFont3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heroFont3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/herofont3_6d00b718.js [app-client] (ecmascript)");
}),
"[project]/src/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$font$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/utils/font.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__heroFont3$3e$__ = __turbopack_context__.i("[project]/src/app/utils/herofont3_6d00b718.js [app-client] (ecmascript) <export default as heroFont3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "8c5460203346869d4edf51279c6ec7d5f5df9f79cd2b8d958c1d807b2a45040a") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c5460203346869d4edf51279c6ec7d5f5df9f79cd2b8d958c1d807b2a45040a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "Registered Nurses",
            "Support Workers",
            "Healthcare Assistants",
            "Cleaners & Domestic Staff"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const roles = t0;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] !== isHovering) {
        t1 = ({
            "Hero[useEffect()]": ()=>{
                const interval = setInterval({
                    "Hero[useEffect() > setInterval()]": ()=>{
                        if (!isHovering) {
                            setIndex({
                                "Hero[useEffect() > setInterval() > setIndex()]": (prev)=>(prev + 1) % roles.length
                            }["Hero[useEffect() > setInterval() > setIndex()]"]);
                        }
                    }
                }["Hero[useEffect() > setInterval()]"], 2500);
                return ()=>clearInterval(interval);
            }
        })["Hero[useEffect()]"];
        t2 = [
            isHovering
        ];
        $[2] = isHovering;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== imageLoaded) {
        t3 = !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gray-200 animate-pulse z-0"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 55,
            columnNumber: 26
        }, this);
        $[5] = imageLoaded;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Hero[<Image>.onLoadingComplete]": ()=>setImageLoaded(true)
        })["Hero[<Image>.onLoadingComplete]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = `
          object-cover transition-opacity duration-700
          ${imageLoaded ? "opacity-100" : "opacity-0"}
        `;
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/carevia1.png",
            alt: "Carevia hero",
            fill: true,
            priority: true,
            sizes: "100vw",
            onLoadingComplete: t4,
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Hero[<Image>.onLoadingComplete]": ()=>setImageLoaded(true)
        })["Hero[<Image>.onLoadingComplete]"];
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const t8 = `
          hidden md:block object-cover transition-opacity duration-700
          ${imageLoaded ? "opacity-100" : "opacity-0"}
        `;
    let t9;
    if ($[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/carevia3a.png",
            alt: "Carevia hero desktop",
            fill: true,
            priority: true,
            sizes: "100vw",
            onLoadingComplete: t7,
            className: t8
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/50 z-10"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== imageLoaded || $[15] !== index) {
        t11 = imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-20 flex flex-col items-center text-center text-white px-4 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `
              bg-white text-[14.4px]
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$herofont3_6d00b718$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__heroFont3$3e$__["heroFont3"].className}
              md:text-[15px] text-blue-800
              lg:mt-[100px] mt-[15px]
              py-[10px] px-[20px]
              font-semibold rounded-[20px]
            `,
                    children: "Redefining Care Staffing across UK"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 112,
                    columnNumber: 119
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-[50px] max-w-xl text-[33px] md:text-[44px] lg:mt-[20px] font-bold",
                    children: [
                        "Trusted care,",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 119,
                            columnNumber: 151
                        }, this),
                        "when and where you need it"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 119,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-[47px] md:mt-[30px] text-[19px] md:text-[23px] font-bold",
                    children: "Your trusted team for every care you need"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 119,
                    columnNumber: 206
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 h-[40px] overflow-hidden relative w-full max-w-md",
                    onMouseEnter: {
                        "Hero[<div>.onMouseEnter]": ()=>setIsHovering(true)
                    }["Hero[<div>.onMouseEnter]"],
                    onMouseLeave: {
                        "Hero[<div>.onMouseLeave]": ()=>setIsHovering(false)
                    }["Hero[<div>.onMouseLeave]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full transition-transform duration-700 ease-in-out",
                        style: {
                            transform: `translateY(-${index * 40}px)`
                        },
                        children: roles.map(_HeroRolesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 123,
                        columnNumber: 38
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 119,
                    columnNumber: 326
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-[10px] mt-[10px] pb-[25px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: _HeroButtonOnClick,
                            className: "border border-white bg-[#0E6BA8] p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]",
                            children: "Contact Now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 125,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/career",
                            className: "border border-white bg-[#629FAD] p-3 mt-[35px] rounded-[10px] font-semibold text-[19px]",
                            children: "Career in Care"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 125,
                            columnNumber: 260
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 125,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 112,
            columnNumber: 26
        }, this);
        $[14] = imageLoaded;
        $[15] = index;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t11 || $[18] !== t3 || $[19] !== t6 || $[20] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative w-screen min-h-[80vh] md:h-screen overflow-hidden",
            children: [
                t3,
                t6,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t3;
        $[19] = t6;
        $[20] = t9;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    return t12;
}
_s(Hero, "WLBEmVkoPwBXaQLQdXd/m3cAJmY=");
_c = Hero;
function _HeroButtonOnClick() {
    return document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth"
    });
}
function _HeroRolesMap(role, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[40px] flex items-center justify-center text-[25px] md:text-[30px] font-semibold",
        children: role
    }, i, false, {
        fileName: "[project]/src/components/Hero.jsx",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Review.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Review
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const reviews = [
    {
        id: 1,
        name: "Samuel Edwards",
        role: "Family Member",
        text: "When my mother was diagnosed with dementia, caring for her became overwhelming for our family. We wanted her to remain at home, but we needed professional support. Carevia Solutions provided a caregiver who was not only highly skilled in dementia care but also kind, patient, and understanding. She quickly built a bond with my mother, helping her feel calm, safe, and respected in her own home.knowing my mother was in compassionate and capable hands gave our family real peace of mind. We’re truly grateful for the care and support we received."
    },
    {
        id: 2,
        name: "Jasmine Woods",
        role: "Client",
        text: `After my accident, I needed extra support to manage daily life and recover safely. The caregiver provided by  Carevia Solutions was patient, professional, and genuinely caring.With their help, I felt supported, respected, and confident as I worked toward regaining my independence. The care made a real difference during a challenging time.`
    },
    {
        id: 3,
        name: "Mary Johnson",
        role: "Family Member",
        text: "Supporting our loved one with learning disabilities has always been important to us, but we knew we needed professional help to give them the best quality of life.Carevia Solutions provided a caregiver who was patient, understanding, and truly committed. They supported daily routines, encouraged independence, and treated our family member with dignity and respect.Knowing our loved one was in safe and caring hands gave us confidence and peace of mind."
    }
];
function Review() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "85c1a462aec3a539c19c256b41d964600f84d500cae462dc39350a85dd9c72b1") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85c1a462aec3a539c19c256b41d964600f84d500cae462dc39350a85dd9c72b1";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Review[useEffect()]": ()=>{
                const interval = setInterval({
                    "Review[useEffect() > setInterval()]": ()=>{
                        setIndex(_ReviewUseEffectSetIntervalSetIndex);
                    }
                }["Review[useEffect() > setInterval()]"], 4000);
                return ()=>clearInterval(interval);
            }
        })["Review[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[30px] font-bold text-[#629FAD] md:text-[37px]",
            children: "Care Stories"
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = reviews[index];
    let t4;
    if ($[4] !== t3.text) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 text-lg mb-4",
            children: t3.text
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3.text;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = reviews[index];
    let t6;
    if ($[6] !== t5.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-[#0E6BA8] text-xl",
            children: t5.name
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t5.name;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = reviews[index];
    let t8;
    if ($[8] !== t7.role) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500",
            children: t7.role
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = t7.role;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t4 || $[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] mx-auto mt-[20px] lg:w-[95%] bg-gradient-to-r from-white  rounded-xl shadow p-6 transition-all duration-500",
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== index) {
        t10 = reviews.map({
            "Review[reviews.map()]": (_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Review[reviews.map() > <button>.onClick]": ()=>setIndex(idx)
                    }["Review[reviews.map() > <button>.onClick]"],
                    className: `w-4 h-4 rounded-full transition-all duration-300 ${idx === index ? "bg-[#296374]" : "bg-gray-300"}`
                }, idx, false, {
                    fileName: "[project]/src/components/Review.jsx",
                    lineNumber: 98,
                    columnNumber: 44
                }, this)
        }["Review[reviews.map()]"]);
        $[14] = index;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mt-6 gap-4",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t11 || $[19] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl mx-auto text-center py-10 px-4",
            children: [
                t2,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Review.jsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t9;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    return t12;
}
_s(Review, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = Review;
function _ReviewUseEffectSetIntervalSetIndex(prev) {
    return (prev + 1) % reviews.length;
}
var _c;
__turbopack_context__.k.register(_c, "Review");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceSlide.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ServiceSlide(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "28bf6b2a079205160d7602243361dda8c739fe725937baea89f5cac5aa76d1bf") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28bf6b2a079205160d7602243361dda8c739fe725937baea89f5cac5aa76d1bf";
    }
    const { cards, color } = t0;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ServiceSlide[useEffect()]": ()=>{
                const updateSize = {
                    "ServiceSlide[useEffect() > updateSize]": ()=>setIsDesktop(window.innerWidth >= 1024)
                }["ServiceSlide[useEffect() > updateSize]"];
                updateSize();
                window.addEventListener("resize", updateSize);
                return ()=>window.removeEventListener("resize", updateSize);
            }
        })["ServiceSlide[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const totalSlides = isDesktop ? Math.ceil(cards.length / 3) : cards.length;
    let t3;
    if ($[3] !== totalSlides) {
        t3 = ({
            "ServiceSlide[prev]": ()=>{
                setIndex({
                    "ServiceSlide[prev > setIndex()]": (i)=>i === 0 ? totalSlides - 1 : i - 1
                }["ServiceSlide[prev > setIndex()]"]);
            }
        })["ServiceSlide[prev]"];
        $[3] = totalSlides;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const prev = t3;
    let t4;
    if ($[5] !== totalSlides) {
        t4 = ({
            "ServiceSlide[next]": ()=>{
                setIndex({
                    "ServiceSlide[next > setIndex()]": (i_0)=>i_0 === totalSlides - 1 ? 0 : i_0 + 1
                }["ServiceSlide[next > setIndex()]"]);
            }
        })["ServiceSlide[next]"];
        $[5] = totalSlides;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const next = t4;
    let t5;
    if ($[7] !== next) {
        t5 = ({
            "ServiceSlide[useEffect()]": ()=>{
                const timer = setInterval(next, 4000);
                return ()=>clearInterval(timer);
            }
        })["ServiceSlide[useEffect()]"];
        $[7] = next;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== isDesktop) {
        t6 = [
            isDesktop
        ];
        $[9] = isDesktop;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const t7 = `p-2 rounded-full border-2 ${color ? "text-[#006A71] border-[#006A71]" : "text-[#0e2954] border-[#0E2954]"} `;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== prev || $[13] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prev,
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[12] = prev;
        $[13] = t7;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = `p-2 rounded-full border-2 ${color ? "text-[#006A71] border-[#006A71]" : "text-[#0e2954] border-[#0E2954]"} `;
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== next || $[17] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: next,
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[16] = next;
        $[17] = t10;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t12 || $[20] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 mb-4 px-4",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t9;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    const t14 = `translateX(-${index * (isDesktop ? 100 : 100)}%)`;
    let t15;
    if ($[22] !== t14) {
        t15 = {
            transform: t14
        };
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== cards || $[25] !== color) {
        let t17;
        if ($[27] !== color) {
            t17 = ({
                "ServiceSlide[cards.map()]": (card, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n                flex-shrink-0\r\n                w-full\r\n                lg:w-1/3\r\n                flex\r\n                justify-center\r\n              ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-[90%] lg:w-[95%] bg-gradient-to-r from-white ${color ? "to-[#006A71]" : "to-[#1F6E8C]"} h-[330px] md:h-[62vh]  rounded-xl shadow p-6`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-[220px] overflow-hidden rounded-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: card.img,
                                        alt: "service-img",
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(min-width: 1024px) 33vw, 100vw"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceSlide.jsx",
                                        lineNumber: 154,
                                        columnNumber: 475
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceSlide.jsx",
                                    lineNumber: 154,
                                    columnNumber: 404
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-[26px] mt-[10px] text-center capitalize font-semibold mb-2 ${color ? "text-[#013437]" : "text-[#0E2954]"} `,
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceSlide.jsx",
                                    lineNumber: 154,
                                    columnNumber: 600
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pt-[20px]",
                                    children: card.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceSlide.jsx",
                                    lineNumber: 154,
                                    columnNumber: 747
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceSlide.jsx",
                            lineNumber: 154,
                            columnNumber: 250
                        }, this)
                    }, card.id, false, {
                        fileName: "[project]/src/components/ServiceSlide.jsx",
                        lineNumber: 154,
                        columnNumber: 53
                    }, this)
            })["ServiceSlide[cards.map()]"];
            $[27] = color;
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        t16 = cards.map(t17);
        $[24] = cards;
        $[25] = color;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[29] !== t15 || $[30] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex transition-transform duration-500 ease-out",
                style: t15,
                children: t16
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceSlide.jsx",
                lineNumber: 170,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t13 || $[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto pt-[25px] ",
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceSlide.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    return t18;
}
_s(ServiceSlide, "wvfqEM9t406WbleEZADIxKxTZCE=");
_c = ServiceSlide;
var _c;
__turbopack_context__.k.register(_c, "ServiceSlide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2b4c8c11._.js.map