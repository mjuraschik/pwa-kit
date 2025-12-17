
"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[928], {
    476: (e, t, l) => {
        l.d(t, {
            A: () => T
        });
        var r = l(77810)
          , a = l(59146)
          , n = l(85353)
          , i = l(3411)
          , o = l(21052)
          , s = l(72176)
          , c = l(75826)
          , u = l.n(c)
          , d = l(41863)
          , p = l(97012)
          , m = l(40123)
          , g = l(68331)
          , y = l(59162)
          , v = l(11533)
          , f = l(49262)
          , E = l(73448)
          , b = l(90031)
          , x = l(46256)
          , h = l(46004)
          , w = l(7424)
          , A = l(77214);
        const _ = {
            "commerce_assets.pdcDisplayConfigLink": x.Kr,
            "commerce_assets.pdcHomeCategoriesPushTile": x.fN,
            "commerce_assets.pdcHomeServicesPushTile": x.Vm,
            "commerce_layouts.pdcHomeCategoriesPush": h.X$,
            "commerce_layouts.pdcHomeServicesPush": h.zh
        }
          , S = ({searchQuery: e, category: t}) => {
            var l, c, u, h, S, T, O;
            const {isProductListLoading: k, metatags: P} = (0,
            p.VV)()
              , C = k ? "" : (null == t ? void 0 : t.name) || e
              , {isOutlet: I} = (0,
            f.A)()
              , {data: L} = (0,
            b.usePage)({
                parameters: {
                    pageId: "search-no-result-page" + (I ? "-outlet" : "")
                }
            })
              , j = (0,
            A.JU)(L, "main")
              , R = null == j || null === (l = j.components) || void 0 === l ? void 0 : l.find((e => "commerce_layouts.pdcHomeCategoriesPush" === (null == e ? void 0 : e.typeId)))
              , D = null == j || null === (c = j.components) || void 0 === c ? void 0 : c.find((e => "commerce_layouts.pdcHomeServicesPush" === (null == e ? void 0 : e.typeId)))
              , $ = R || D
              , M = null == L || null === (u = L.regions) || void 0 === u ? void 0 : u[1].components
              , z = null == L || null === (h = L.regions) || void 0 === h ? void 0 : h[2].components
              , [F] = (0,
            r.useState)({
                components: _
            })
              , V = [{
                id: "description",
                value: (null == t ? void 0 : t.pageDescription) || (null == P || null === (S = P.find((e => "description" === e.id))) || void 0 === S ? void 0 : S.value) || e
            }, {
                id: "title",
                value: (null == t ? void 0 : t.pageTitle) || (null == P || null === (T = P.find((e => "title" === e.id))) || void 0 === T ? void 0 : T.value) || e
            }, {
                id: "keywords",
                value: (null == t ? void 0 : t.pageKeywords) || (null == P || null === (O = P.find((e => "keywords" === e.id))) || void 0 === O ? void 0 : O.value) || ""
            }, {
                id: "robots",
                value: "noindex"
            }];
            return r.createElement(a.a, {
                borderTopWidth: 1,
                borderColor: "borderGray"
            }, r.createElement(g.A, {
                metaData: V
            }), r.createElement(a.a, {
                px: {
                    base: "16px",
                    lg: "30px"
                },
                pt: "64px",
                pb: "56px",
                maxWidth: {
                    base: "none",
                    md: "796px"
                },
                mx: {
                    base: "0",
                    md: "auto"
                }
            }, k && r.createElement(y.A, {
                isBodyLocked: !0,
                wrapperStyles: {
                    height: "100dvh"
                }
            }), r.createElement(n.D, {
                as: "h1",
                fontSize: "4xl",
                textTransform: "uppercase",
                mb: {
                    base: "40px",
                    md: "52px"
                },
                textAlign: {
                    base: "left",
                    md: "center"
                }
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: 'We couldn’t find anything for "'
                }, {
                    type: 1,
                    value: "search"
                }, {
                    type: 0,
                    value: '"'
                }],
                id: "empty_search_results.main_heading",
                values: {
                    search: C
                }
            })), r.createElement(m.A, {
                isSuggestionsEnabled: !1,
                isFocusOnInit: !1,
                containerProps: {
                    maxWidth: "412px",
                    mx: "auto"
                }
            }), r.createElement(i.r, {
                columns: {
                    base: 1,
                    md: 3
                },
                spacing: "40px",
                mt: {
                    base: "40px",
                    lg: "52px"
                }
            }, r.createElement(a.a, null, r.createElement(o.E, {
                as: "h2",
                variant: "eyeBrowSmall",
                mb: "8px",
                textTransform: "uppercase"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Our Tips"
                }],
                id: "empty_search_results.our_tips.title"
            })), r.createElement(s.B8, {
                listStyleType: "disc",
                paddingInlineStart: "24px",
                spacing: "8px"
            }, r.createElement(s.ck, {
                textStyle: "bodyLarge2"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Check your spelling"
                }],
                id: "empty_search_results.our_tips.tip_1"
            })), r.createElement(s.ck, {
                textStyle: "bodyLarge2"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Be more generic"
                }],
                id: "empty_search_results.our_tips.tip_2"
            })), r.createElement(s.ck, {
                textStyle: "bodyLarge2"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Try similar terms"
                }],
                id: "empty_search_results.our_tips.tip_3"
            })))), r.createElement(a.a, null, r.createElement(o.E, {
                as: "h2",
                variant: "eyeBrowSmall",
                mb: "16px",
                textTransform: "uppercase"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Common Searches"
                }],
                id: "empty_search_results.common_searches.title"
            })), M && r.createElement(s.B8, {
                spacing: "16px"
            }, M.map((e => {
                var t;
                return r.createElement(s.ck, {
                    key: e.id
                }, r.createElement(x.Kr, {
                    custom: null == e ? void 0 : e.custom,
                    label: null == e || null === (t = e.data) || void 0 === t ? void 0 : t.label
                }))
            }
            )))), r.createElement(a.a, null, r.createElement(o.E, {
                as: "h2",
                variant: "eyeBrowSmall",
                mb: "16px",
                textTransform: "uppercase"
            }, r.createElement(d.A, {
                defaultMessage: [{
                    type: 0,
                    value: "How can we help?"
                }],
                id: "empty_search_results.help.title"
            })), z && r.createElement(s.B8, {
                spacing: "16px"
            }, z.map((e => {
                var t;
                return r.createElement(s.ck, {
                    key: e.id
                }, r.createElement(x.Kr, {
                    displayConfig: "transparent button",
                    custom: null == e ? void 0 : e.custom,
                    label: null == e || null === (t = e.data) || void 0 === t ? void 0 : t.label
                }))
            }
            )))))), $ && r.createElement(w.PageContext.Provider, {
                value: F
            }, R && r.createElement(w.Component, {
                component: R
            }), D && r.createElement(w.Component, {
                component: D
            })), r.createElement(v.default, {
                title: r.createElement(n.D, {
                    as: "h2",
                    size: ["3xl", null, "4xl"],
                    pb: [40, null, 0],
                    pl: ["10px", null, 0]
                }, r.createElement(d.A, {
                    defaultMessage: [{
                        type: 0,
                        value: "TRENDING PRODUCTS"
                    }],
                    id: "empty_search_results.recommended_products.title.top_sellers"
                })),
                recommender: E.tDG.EMPTY_SEARCH_RESULTS_TOP_SELLERS,
                isScroller: !1,
                isCarousel: {
                    base: !1,
                    md: !0,
                    lg: !0
                },
                mb: {
                    base: "60px",
                    lg: "120px"
                }
            }))
        }
        ;
        S.propTypes = {
            searchQuery: u().string,
            category: u().object
        };
        const T = S
    }
    ,
    44051: (e, t, l) => {
        l.d(t, {
            B: () => a
        });
        var r = l(73448);
        const a = (e, t) => {
            e.categoryId !== r.o_y || t.includes(r.__Q) ? e.categoryId !== r.o_y && t.includes(r.__Q) && t.splice(t.indexOf(r.__Q), 1) : t.push(r.__Q)
        }
    }
    ,
    48186: (e, t, l) => {
        l.d(t, {
            A: () => h
        });
        var r = l(64180)
          , a = l(77810)
          , n = l(75826)
          , i = l.n(n)
          , o = l(41863)
          , s = l(97012)
          , c = l(59146)
          , u = l(65958)
          , d = l(21052)
          , p = l(85353)
          , m = l(61892)
          , g = l(18801)
          , y = l(28137);
        const v = ["description", "shortDescription"]
          , f = e => {
            let {description: t, shortDescription: l} = e
              , r = (0,
            g.A)(e, v);
            const [n,i] = (0,
            a.useState)(!1)
              , s = (0,
            a.useCallback)(( () => {
                i(!0)
            }
            ));
            return l || t ? a.createElement(c.a, r, a.createElement(d.E, {
                textStyle: "bodyLarge2",
                color: "darkGray"
            }, n ? t : l, !n && a.createElement(y.$, {
                variant: "link",
                textDecoration: "none",
                fontSize: "lg",
                display: "inline-block",
                marginLeft: "5px",
                onClick: s
            }, a.createElement(o.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Read more"
                }],
                id: "read_more_text.button.label"
            }))), a.createElement(c.a, {
                display: "none"
            }, a.createElement(d.E, null, t))) : null
        }
        ;
        f.propTypes = {
            description: i().string.isRequired,
            shortDescription: i().string
        };
        const E = f;
        var b = l(50828);
        const x = ({containerProps: e={}, descriptionProps: t={}}) => {
            const {searchQuery: l, category: n} = (0,
            s.VV)();
            return a.createElement(c.a, {
                "data-testid": "sf-product-list-breadcrumb"
            }, n && a.createElement(b.A, {
                categories: null == n ? void 0 : n.c_extendedParentCategoryTree
            }), a.createElement(u.B, (0,
            r.A)({
                gap: 12,
                px: [10, 10, 20, 20],
                py: [45, 45, 35, 35]
            }, e), l && a.createElement(d.E, {
                textStyle: "eyeBrowLarge",
                color: "darkGray",
                textTransform: "uppercase"
            }, a.createElement(o.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Search Results for"
                }],
                id: "product_list.header.search_for"
            })), n || l ? a.createElement(p.D, {
                as: "h1",
                fontSize: ["4xl", null, "5xl"],
                textTransform: "uppercase"
            }, `${(null == n ? void 0 : n.c_seoDisplayName) || (null == n ? void 0 : n.name) || l || ""}`) : a.createElement(m.E, {
                height: "52px"
            }), (null == n ? void 0 : n.description) && a.createElement(E, (0,
            r.A)({
                description: n.description,
                shortDescription: n.c_shortDescription,
                maxWidth: {
                    base: "330px",
                    md: "520px"
                }
            }, t))))
        }
        ;
        x.propTypes = {
            containerProps: i().object,
            descriptionProps: i().object
        };
        const h = x
    }
    ,
    81497: (e, t, l) => {
        l.d(t, {
            A: () => K
        });
        var r = l(64180)
          , a = l(77810)
          , n = l(34692)
          , i = l(64965)
          , o = l(97012)
          , s = l(55848)
          , c = l(65958)
          , u = l(60946)
          , d = l(29370)
          , p = l(21052)
          , m = l(63391)
          , g = l(89151)
          , y = l(75826)
          , v = l.n(y)
          , f = l(77182)
          , E = l(59146)
          , b = l(3411)
          , x = l(67234)
          , h = l(28137)
          , w = l(73448)
          , A = l(88927)
          , _ = l(87521);
        const S = {
            "00010": "white",
            "00020": "beige",
            "00030": "yellow",
            "00040": "orange",
            "00050": "pink",
            "00060": "red",
            "00070": "blue",
            "00080": "green",
            "00090": "purple",
            "00100": "brown",
            "00110": "grey",
            "00120": "black",
            "00130": "miscellaneous"
        }
          , T = ({filter: e, selectedFilters: t}) => {
            var l;
            const i = (0,
            n.A)()
              , {toggleFilter: s} = (0,
            o.VV)()
              , c = (0,
            f.o)("SwatchGroup", {
                variant: "buttonWithChip",
                disabled: !1
            });
            return (null === (l = e.values) || void 0 === l ? void 0 : l.length) > 0 && a.createElement(E.a, {
                as: "fieldset"
            }, a.createElement("legend", {
                className: "sr-only"
            }, i.formatMessage(_.REFINEMENT_LEGEND, {
                label: e.label
            })), a.createElement(b.r, {
                as: "ul",
                columns: [4, null, 6],
                spacingY: 5,
                mt: 1,
                listStyleType: "none"
            }, e.values.map(( (l, n) => {
                var o;
                const u = t.includes(l.value)
                  , d = S[null === (o = l.value) || void 0 === o ? void 0 : o.toLowerCase()] || ""
                  , m = w.hDB[d] || "transparent";
                if (0 !== l.hitCount || u)
                    return a.createElement(x.s, {
                        as: "li",
                        key: `color-item-${l.value}`
                    }, a.createElement(h.$, (0,
                    r.A)({}, c.swatch, {
                        onClick: () => s(l, e.attributeId, u),
                        "aria-checked": u,
                        borderColor: u ? "fullBlack" : "gray",
                        bgColor: u ? "fullBlack" : "transparent",
                        zIndex: u ? 1 : 0,
                        variant: "outline",
                        "aria-label": i.formatMessage(u ? A.y7 : A.x2, l)
                    }), a.createElement(E.a, (0,
                    r.A)({}, c.chip, {
                        marginRight: 0,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }, "miscellaneous" === d ? {
                        background: m
                    } : {
                        backgroundColor: m
                    }, {
                        borderWidth: l.value === w.TwU || l.value === w.vX1 && u ? "1px" : 0,
                        borderColor: l.value === w.vX1 && u ? "white" : "gray"
                    })), a.createElement(p.E, (0,
                    r.A)({
                        variant: "bodySmall"
                    }, c.text, {
                        color: u ? "white" : "darkGray",
                        "aria-hidden": "true"
                    }), l.label)))
            }
            ))))
        }
        ;
        T.propTypes = {
            filter: v().object,
            selectedFilters: v().array
        };
        const O = a.memo(T)
          , k = ({filter: e, selectedFilters: t}) => {
            var l, i;
            const {formatMessage: s} = (0,
            n.A)()
              , {toggleFilter: c} = (0,
            o.VV)()
              , u = (0,
            f.o)("SwatchGroup", {
                variant: "sizeRefinement",
                disabled: !1
            });
            return (null === (l = e.values) || void 0 === l ? void 0 : l.length) > 0 && a.createElement(E.a, {
                as: "fieldset"
            }, a.createElement("legend", {
                className: "sr-only"
            }, s(_.REFINEMENT_LEGEND, {
                label: e.label
            })), a.createElement(b.r, {
                as: "ul",
                listStyleType: "none",
                width: "full",
                templateColumns: "repeat(5, 1fr)",
                spacingX: 0,
                spacingY: 10
            }, null === (i = e.values) || void 0 === i ? void 0 : i.map(( (l, n) => {
                const i = t.some((e => e == l.value));
                if (0 !== l.hitCount || i)
                    return a.createElement(E.a, {
                        as: "li",
                        key: `size-button-${l.value}`
                    }, a.createElement(h.$, (0,
                    r.A)({}, u.swatch, {
                        variant: "outline",
                        borderColor: i ? "fullBlack" : "gray",
                        backgroundColor: i ? "fullBlack" : "transparent",
                        color: i ? "white" : "darkGray",
                        zIndex: i ? 1 : 0,
                        onClick: () => c(l, e.attributeId, i),
                        "aria-checked": i,
                        "aria-label": s(i ? A.qG : A.b8, l)
                    }), l.label))
            }
            ))))
        }
        ;
        k.propTypes = {
            filter: v().object,
            selectedFilters: v().oneOfType([v().arrayOf(v().string), v().string])
        };
        const P = a.memo(k);
        var C = l(10939)
          , I = l(72176)
          , L = l(83527)
          , j = l(23536);
        function R(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(l), !0).forEach((function(t) {
                    (0,
                    C.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : R(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const $ = ({filter: e, selectedFilters: t}) => {
            var l, r;
            const {formatMessage: i} = (0,
            n.A)()
              , {toggleFilter: s} = (0,
            o.VV)()
              , c = {
                [w.dT8]: {
                    id: "family_filter.isfamily.f.label",
                    defaultMessage: "Family Matching"
                },
                [w.Gd6]: {
                    id: "family_filter.isfamily.md.label",
                    defaultMessage: "Mother & Daughter"
                },
                [w.SQ8]: {
                    id: "family_filter.isfamily.fs.label",
                    defaultMessage: "Father & Sons"
                }
            };
            let u = e;
            return "c_orliweb_isFamily" === (null == e ? void 0 : e.attributeId) && e.values && (u.values = e.values.filter((e => e.value !== w.wXQ)).map((e => {
                const t = c[e.value];
                return t ? D(D({}, e), {}, {
                    label: i(t)
                }) : e
            }
            ))),
            (null == u || null === (l = u.values) || void 0 === l ? void 0 : l.length) > 0 && a.createElement(E.a, {
                as: "fieldset"
            }, a.createElement("legend", {
                className: "sr-only"
            }, i(_.REFINEMENT_LEGEND, {
                label: e.label
            })), a.createElement(I.B8, {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10
            }, null === (r = e.values) || void 0 === r ? void 0 : r.map((l => {
                const r = t.includes(l.value);
                if (0 !== l.hitCount || r)
                    return a.createElement(I.ck, {
                        key: l.value,
                        margin: 0
                    }, a.createElement(L.S, {
                        isChecked: r,
                        icon: a.createElement(j.Sr, {
                            boxSize: "10px"
                        }),
                        onChange: () => s(l, e.attributeId, r),
                        "aria-label": i(r ? A.qG : A.b8, l)
                    }, l.label))
            }
            ))))
        }
        ;
        $.propTypes = {
            filter: v().object,
            selectedFilters: v().array
        };
        const M = a.memo($);
        var z = l(87916)
          , F = l(17015);
        const V = ({filter: e, onSelect: t=F.lQ}) => a.createElement(I.B8, {
            display: "flex",
            flexDirection: "column",
            gap: 10
        }, e.values.map((e => a.createElement(I.ck, {
            key: e.value
        }, a.createElement(z.A, {
            href: `/category/${e.value}`,
            onClick: t,
            useNavLink: !0
        }, e.label)))));
        V.propTypes = {
            filter: v().object,
            onSelect: v().func
        };
        const N = V;
        var B = l(12609)
          , G = l(42458);
        const Q = ({sortingIdx: e, sortingLabel: t, sortingHref: l, isSelected: r=!1}) => {
            const n = (0,
            i.W6)();
            return a.createElement(B.z, {
                gap: 0
            }, a.createElement(G.s, {
                id: `radio-sorting-label-${e}`,
                isChecked: r,
                onChange: () => !r && n.push(l)
            }, t))
        }
        ;
        Q.propTypes = {
            sortingIdx: v().number.isRequired,
            sortingLabel: v().string.isRequired,
            sortingHref: v().string.isRequired,
            isSelected: v().bool
        };
        const q = ({sortUrls: e=[], sortingOptions: t=[], selectedSortingOptionLabel: l}) => {
            const {formatMessage: r} = (0,
            n.A)();
            return e.length > 0 && a.createElement(E.a, {
                as: "fieldset"
            }, a.createElement("legend", {
                className: "sr-only"
            }, r({
                id: "refinements.sorting.legend",
                defaultMessage: [{
                    type: 0,
                    value: "Possible sorting options"
                }]
            })), a.createElement(I.B8, {
                display: "flex",
                flexDirection: "column",
                gap: 10
            }, e.map(( (e, r) => {
                var n, i, o;
                return a.createElement(I.ck, {
                    key: null === (n = t[r]) || void 0 === n ? void 0 : n.id,
                    margin: 0
                }, a.createElement(Q, {
                    sortingIdx: r,
                    sortingLabel: null === (i = t[r]) || void 0 === i ? void 0 : i.label,
                    sortingHref: e,
                    isSelected: (null == l ? void 0 : l.label) === (null === (o = t[r]) || void 0 === o ? void 0 : o.label),
                    selectedSortingOptionLabel: null == l ? void 0 : l.label
                }))
            }
            ))))
        }
        ;
        q.propTypes = {
            sortUrls: v().arrayOf(v().string),
            sortingOptions: v().arrayOf(v().object),
            selectedSortingOptionLabel: v().object
        };
        const W = a.memo(q);
        var U = l(44051);
        const H = {
            cgid: N,
            c_subCategoryID: N,
            c_orliweb_color_code_rgt: O,
            c_size: P
        }
          , X = ({isExcludedFilters: e=!0, filters: t=[], sortingOptions: l=[], selectedFilters: y, isLoading: v}) => {
            var f;
            const E = (0,
            i.g)();
            (0,
            U.B)(E, o.uu);
            const {formatMessage: b} = (0,
            n.A)()
              , {onCloseRefinements: x, selectedSortingOptionLabel: h} = (0,
            o.VV)()
              , w = (0,
            s.Gl)({
                options: l
            });
            e && (t = t.filter(( ({attributeId: e}) => !o.uu.includes(e))));
            let A = t.map(( (e, t) => t));
            return w && A.push(t.length),
            a.createElement(c.B, {
                as: "section",
                "aria-label": b({
                    defaultMessage: [{
                        type: 0,
                        value: "Product filters"
                    }],
                    id: "refinements.region.aria_label"
                })
            }, A && a.createElement(u.n, {
                as: "ul",
                pointerEvents: v ? "none" : "auto",
                allowMultiple: !0,
                defaultIndex: A,
                reduceMotion: !0
            }, w && a.createElement(d.A, {
                key: "sort-by",
                as: "li",
                listStyleType: "none",
                border: "none",
                padding: 0
            }, ( ({isExpanded: e}) => a.createElement(a.Fragment, null, a.createElement(p.E, {
                as: "div",
                role: "heading",
                "aria-level": "2"
            }, a.createElement(m.J, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                py: 20
            }, a.createElement(p.E, {
                as: "span",
                align: "left",
                textStyle: "bodyLarge2"
            }, b({
                defaultMessage: [{
                    type: 0,
                    value: "Sort by"
                }],
                id: "refinements.sort_by.title"
            })), e ? a.createElement(j.xj, {
                boxSize: "12px"
            }) : a.createElement(j.c1, {
                boxSize: "12px"
            }))), a.createElement(g.v, {
                paddingTop: 0,
                paddingBottom: 10
            }, a.createElement(W, {
                sortUrls: w,
                sortingOptions: l,
                selectedSortingOptionLabel: h
            }))))), null === (f = t) || void 0 === f ? void 0 : f.map(( (e, t) => {
                const l = H[e.attributeId] || M;
                let n = (null == y ? void 0 : y[e.attributeId]) ?? [];
                return Array.isArray(n) || (n = [n]),
                e.values ? a.createElement(d.A, {
                    key: `filter-accordion-item-${e.attributeId}`,
                    as: "li",
                    listStyleType: "none",
                    border: "none",
                    padding: 0
                }, ( ({isExpanded: t}) => a.createElement(a.Fragment, null, a.createElement(p.E, {
                    as: "div",
                    role: "heading",
                    "aria-level": "2"
                }, a.createElement(m.J, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    py: 20
                }, a.createElement(p.E, {
                    as: "span",
                    align: "left",
                    textStyle: "bodyLarge2"
                }, e.label), t ? a.createElement(j.xj, {
                    boxSize: "12px"
                }) : a.createElement(j.c1, {
                    boxSize: "12px"
                }))), a.createElement(g.v, {
                    paddingTop: 0,
                    paddingBottom: 10
                }, a.createElement(l, (0,
                r.A)({
                    selectedFilters: n,
                    filter: e
                }, l === N && {
                    onSelect: x
                })))))) : null
            }
            ))))
        }
        ;
        X.propTypes = {
            filters: v().array,
            sortingOptions: v().array,
            isExcludedFilters: v().bool,
            selectedFilters: v().oneOfType([v().array, v().object]),
            isLoading: v().bool
        };
        const K = X
    }
    ,
    87521: (e, t, l) => {
        l.r(t),
        l.d(t, {
            PRODUCT_LIST_TOTAL: () => Lt,
            REFINEMENT_LEGEND: () => It,
            default: () => Dt
        });
        var r = l(64180)
          , a = l(10939)
          , n = l(77810)
          , i = l(75826)
          , o = l.n(i)
          , s = l(54752)
          , c = l(16602)
          , u = l(90031)
          , d = l(64965)
          , p = l(83877)
          , m = l(33044)
          , g = l(17015)
          , y = l(59146)
          , v = l(97012)
          , f = l(48186)
          , E = l(34692)
          , b = l(41863)
          , x = l(54183)
          , h = l(61892)
          , w = l(67234)
          , A = l(12609)
          , _ = l(21052)
          , S = l(28137)
          , T = l(87275)
          , O = l(84479);
        const k = ({categories: e=[], containerProps: t={}}) => {
            const l = (0,
            E.A)()
              , {buildUrl: a} = (0,
            p.A)();
            return 0 === e.length ? null : n.createElement(y.a, (0,
            r.A)({
                overflowX: "auto",
                whiteSpace: "nowrap",
                pb: 9,
                m: [10, null, "13px 20px 4px"]
            }, t, {
                as: "nav",
                "aria-label": l.formatMessage({
                    id: "plp.product_categories",
                    defaultMessage: [{
                        type: 0,
                        value: "Product categories"
                    }]
                })
            }), n.createElement(A.z, {
                spacing: [0, null, 6],
                as: "ul",
                listStyleType: "none"
            }, e.map((e => n.createElement(y.a, {
                key: e.id,
                as: "li",
                p: "3px 0"
            }, n.createElement(S.$, {
                as: T.Link,
                to: a((0,
                O.XX)(e, l.locale)),
                variant: "secondary",
                size: "sm",
                flexShrink: 0,
                mr: [-1, null, 0],
                color: "darkGray",
                lineHeight: 1
            }, e.displayName))))))
        }
        ;
        k.propTypes = {
            categories: o().array,
            containerProps: o().object
        };
        const P = k;
        var C = l(18801)
          , I = l(86708)
          , L = l(77182)
          , j = l(4814)
          , R = l(88927)
          , D = l(73448);
        const $ = ["label"]
          , M = e => {
            let {label: t} = e
              , l = (0,
            C.A)(e, $);
            const {getInputProps: a, getRadioProps: i, getLabelProps: o} = (0,
            I.z)(l)
              , s = a()
              , c = i()
              , u = o()
              , {formatMessage: d} = (0,
            E.A)()
              , p = (0,
            L.o)("SwatchGroup", {
                variant: "gender",
                disabled: !1
            });
            return n.createElement(y.a, (0,
            r.A)({
                as: "label"
            }, u), n.createElement("input", (0,
            r.A)({}, s, {
                "aria-label": d(R.b8, {
                    label: t
                })
            })), n.createElement(y.a, (0,
            r.A)({}, c, p.swatch, {
                "aria-hidden": !1,
                cursor: "pointer"
            }), t))
        }
        ;
        M.propTypes = {
            label: o().string
        };
        const z = () => {
            var e, t, l;
            const {formatMessage: a} = (0,
            E.A)()
              , {productSearchResult: i, toggleFilter: o, searchParams: s, resetFilters: c} = (0,
            v.VV)()
              , u = null == i || null === (e = i.refinements) || void 0 === e ? void 0 : e.find((e => e.attributeId === D.Jj$));
            let d = (null == s || null === (t = s.refine) || void 0 === t ? void 0 : t[D.Jj$]) ?? [];
            Array.isArray(d) || (d = [d]);
            const {getRootProps: p, getRadioProps: m} = (0,
            j.m)({
                name: "gender",
                defaultValue: "all",
                onChange: e => {
                    if ("all" === e && d.length)
                        c(D.Jj$);
                    else {
                        const t = d.includes(e);
                        if (!t) {
                            const l = u.values.find((t => t.value === e));
                            o(l, D.Jj$, t, !1)
                        }
                    }
                }
            })
              , g = p();
            return null != u && null !== (l = u.values) && void 0 !== l && l.length ? n.createElement(y.a, {
                as: "fieldset",
                px: [10, 10, 20, 20],
                py: 20
            }, n.createElement("legend", {
                className: "sr-only"
            }, a(It, {
                label: u.label
            })), n.createElement(A.z, (0,
            r.A)({
                spacing: {
                    base: 0,
                    lg: "6px"
                }
            }, g), n.createElement(M, (0,
            r.A)({
                key: "all"
            }, m({
                value: "all"
            }), {
                label: a({
                    id: "product_list.gender.all",
                    defaultMessage: [{
                        type: 0,
                        value: "All"
                    }]
                })
            })), u.values.map((e => n.createElement(M, (0,
            r.A)({
                key: e.value
            }, m({
                value: e.value
            }), {
                label: e.label
            })))))) : null
        }
        ;
        var F = l(23536)
          , V = l(68331)
          , N = l(15362)
          , B = l(77214);
        const G = ({isLinkedCategories: e=!0}) => {
            var t;
            const {formatMessage: l} = (0,
            E.A)()
              , {category: r, isProductListLoading: a, productSearchResult: i, onOpenRefinements: o, refinementsOpenRef: s, metatags: c} = (0,
            v.VV)()
              , u = null == r ? void 0 : r.c_linkedCategories
              , d = (0,
            n.useRef)(null)
              , p = (0,
            x.A)({
                base: 64,
                md: 52
            })
              , m = (0,
            x.A)({
                base: !0,
                lg: !1
            })
              , [g,f] = (0,
            n.useState)(!0);
            (0,
            n.useEffect)(( () => {
                var e;
                if (null == d || !d.current)
                    return;
                const t = new IntersectionObserver(( ([e]) => {
                    const t = e.isIntersecting;
                    f(t)
                }
                ),{
                    rootMargin: `-${p + ((null == d || null === (e = d.current) || void 0 === e ? void 0 : e.clientHeight) || 0) + 2}px 0px 0px 0px`,
                    threshold: 0
                });
                return t.observe(null == d ? void 0 : d.current),
                () => {
                    t.disconnect()
                }
            }
            ), [p, null == d ? void 0 : d.current]);
            const T = (0,
            N.I)(r, c);
            return r ? n.createElement(w.s, {
                ref: d,
                direction: {
                    base: "column",
                    lg: "row"
                },
                justify: "space-between",
                align: "flex-start",
                gap: {
                    base: 0,
                    lg: 10
                },
                borderTopWidth: [0, null, null, null == d || !d.current || g ? 0 : 1],
                borderBottomWidth: null == d || !d.current || g ? 0 : 1,
                mb: null == d || !d.current || g ? 0 : -1,
                borderColor: "borderGray",
                position: "sticky",
                top: [p - (u ? 72 : 0) + "px", null, null, `${p}px`],
                bg: "white",
                zIndex: 1
            }, n.createElement(V.A, {
                metaData: T
            }), (0,
            B.Gk)() && null != d && d.current ? (m || g) && n.createElement(y.a, {
                w: "full"
            }, e ? n.createElement(P, {
                categories: u
            }) : n.createElement(z, null)) : n.createElement(y.a, {
                px: [10, 10, 20, 20],
                py: [10, 10, 14, 14],
                width: ["auto", null, "40%"],
                maxWidth: "100vw"
            }, e && (null == u ? void 0 : u.length) > 0 ? n.createElement(A.z, {
                gap: 10
            }, u.map((e => n.createElement(h.E, {
                key: e.id,
                height: "40px",
                width: "200px"
            })))) : (null == i || null === (t = i.refinements) || void 0 === t ? void 0 : t.find((e => e.attributeId === D.Jj$))) && n.createElement(h.E, {
                height: "40px",
                width: "100%"
            })), n.createElement(w.s, {
                px: {
                    base: 10,
                    md: 20
                },
                py: {
                    base: 10,
                    lg: g ? 14 : 6
                },
                justifyContent: {
                    base: i ? "space-between" : "flex-end",
                    lg: "space-between"
                },
                align: "center",
                borderTopWidth: [1, null, null, 0],
                borderColor: "borderGray",
                gap: 20,
                w: {
                    base: "full",
                    lg: null != d && d.current && !g ? "full" : "auto"
                }
            }, a ? n.createElement(h.E, {
                height: "20px",
                width: "80px"
            }) : i && n.createElement(_.E, {
                variant: "bodySmall",
                color: "darkGray",
                whiteSpace: "nowrap"
            }, l(Lt, {
                total: (null == i ? void 0 : i.total) || 0
            })), n.createElement(S.$, {
                variant: "primary",
                height: ["40px", null, null, g ? "44px" : "40px"],
                rightIcon: n.createElement(F.A, {
                    boxSize: 4
                }),
                onClick: o,
                ref: s
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Filter"
                }],
                id: "product_list.button.filter"
            })))) : n.createElement(y.a, {
                px: [10, 10, 20, 20],
                py: [10, 10, 14, 14]
            }, n.createElement(h.E, {
                height: "40px",
                width: "100%"
            }))
        }
        ;
        G.propTypes = {
            isLinkedCategories: o().bool
        };
        const Q = G;
        var q = l(28156)
          , W = l(10697)
          , U = l(44075)
          , H = l(5444)
          , X = l(1194)
          , K = l(95323)
          , J = l(40714)
          , Y = l(59162)
          , Z = l(81497);
        const ee = (0,
        c.zR)({
            defaultMessage: [{
                type: 0,
                value: "Close Filter"
            }],
            id: "refinements_drawer.close.aria_label"
        })
          , te = () => {
            const {formatMessage: e} = (0,
            E.A)()
              , {isOpenRefinements: t, onCloseRefinements: l, refinementsOpenRef: r, refinementsCloseRef: a, isProductListLoading: i, productSearchResult: o, searchParams: s, resetFilters: c} = (0,
            v.VV)();
            return n.createElement(q._s, {
                isOpen: t,
                onClose: l,
                initialFocusRef: a,
                finalFocusRef: r,
                placement: "right",
                size: "md"
            }, n.createElement(W.m, null), n.createElement(U.z, null, n.createElement(H.r, {
                px: {
                    base: 10,
                    lg: 20
                },
                py: 24
            }, n.createElement(_.E, {
                as: "div",
                role: "heading",
                "aria-level": "1",
                variant: "eyeBrowLarge",
                textTransform: "uppercase",
                paddingRight: 24
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Filter"
                }],
                id: "product_list.modal.title.filter"
            }))), n.createElement(X.s, {
                ref: a,
                "aria-label": e(ee)
            }, n.createElement(F.US, {
                boxSize: "14px",
                svgTitle: e(ee),
                svgDescription: e(ee)
            })), n.createElement(K.c, {
                px: [10, 10, 10, 20],
                py: [10, 10, 10, 10]
            }, i && n.createElement(Y.A, null), n.createElement(Z.A, {
                isLoading: i,
                filters: null == o ? void 0 : o.refinements,
                sortingOptions: null == o ? void 0 : o.sortingOptions,
                selectedFilters: s.refine
            })), n.createElement(J.j, {
                display: "block",
                width: "full",
                px: [10, 10, 10, 20],
                py: 20
            }, n.createElement(w.s, {
                gap: 10
            }, n.createElement(S.$, {
                variant: "secondary",
                flex: "1",
                onClick: c
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Clear All"
                }],
                id: "product_list.modal.button.clear_filters"
            })), n.createElement(S.$, {
                variant: "primary",
                flex: "1",
                onClick: l
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 6,
                    value: "productCount",
                    options: {
                        "=0": {
                            value: [{
                                type: 0,
                                value: "No items"
                            }]
                        },
                        one: {
                            value: [{
                                type: 0,
                                value: "Apply ("
                            }, {
                                type: 1,
                                value: "productCount"
                            }, {
                                type: 0,
                                value: " item)"
                            }]
                        },
                        other: {
                            value: [{
                                type: 0,
                                value: "Apply ("
                            }, {
                                type: 1,
                                value: "productCount"
                            }, {
                                type: 0,
                                value: " items)"
                            }]
                        }
                    },
                    offset: 0,
                    pluralType: "cardinal"
                }],
                values: {
                    productCount: (null == o ? void 0 : o.total) || 0
                },
                id: "product_list.modal.button.apply_items"
            }))))))
        }
        ;
        te.propTypes = {};
        const le = te;
        var re = l(2887)
          , ae = l(36763)
          , ne = l(55848)
          , ie = l(85535)
          , oe = l(3411)
          , se = l(52233)
          , ce = l(54284);
        const ue = ({total: e}) => {
            const t = (0,
            d.zy)()
              , l = new URLSearchParams(t.search)
              , r = parseInt(l.get("p")) || 0
              , a = `${(0,
            B.e1)()}${t.pathname}`
              , i = r > 1 ? `${a}?p=${r - 1}` : 1 === r ? a : null
              , o = r < Math.ceil(e / D.Q$K) - 1 ? `${a}?p=${r + 1}` : 0 === r ? `${a}?p=1` : null
              , c = 0 === r ? a : `${a}?p=${r}`
              , u = Math.ceil(e / D.Q$K)
              , p = (0,
            n.useMemo)(( () => Array.from({
                length: u
            }, ( (e, t) => {
                const l = `${a}${0 === t ? "" : `?p=${t}`}`;
                return n.createElement(ce.N, {
                    key: t,
                    href: l,
                    display: "block"
                }, l)
            }
            ))), [a, u]);
            return n.createElement(n.Fragment, null, n.createElement(s.Helmet, null, i && n.createElement("link", {
                rel: "prev",
                href: i
            }), o && n.createElement("link", {
                rel: "next",
                href: o
            }), n.createElement("link", {
                rel: "canonical",
                href: c
            })), n.createElement(y.a, {
                display: "none"
            }, p))
        }
        ;
        ue.propTypes = {
            total: o().number.isRequired
        };
        const de = ue
          , pe = ["subSet"]
          , me = ["_refine"];
        function ge(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ge(Object(l), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : ge(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const ve = e => {
            var t;
            let {subSet: l} = e
              , a = (0,
            C.A)(e, pe);
            const i = (0,
            E.A)()
              , o = (0,
            ie.A)()
              , {shipToCountry: s} = (0,
            ae.A)()
              , {isSearch: c, category: p, total: m, isLoading: f, isRefetching: x, isFetched: h, searchQuery: w, metatags: A} = (0,
            v.VV)()
              , {wishlist: _, addProductToWishlist: T, removeProductFromWishlist: O} = (0,
            re.G)()
              , k = (0,
            n.useRef)(null)
              , P = (0,
            n.useRef)(null)
              , I = (0,
            d.zy)()
              , L = new URLSearchParams(I.search)
              , j = parseInt(L.get("p")) || 1
              , [R,$] = (0,
            n.useState)(l)
              , [M,z] = (0,
            n.useState)(f)
              , [F,B] = (0,
            n.useState)(x)
              , [G,Q] = (0,
            n.useState)(h)
              , [q,W] = (0,
            n.useState)(!1)
              , [U,H] = (0,
            n.useState)(!1)
              , [X,K] = (0,
            n.useState)(null == R ? void 0 : R.length)
              , [J,Y] = (0,
            n.useState)("")
              , [Z,ee] = (0,
            n.useState)(!0)
              , te = c ? D.DYX : D.Q$K
              , le = Z || c ? te : D.EjN
              , ce = (j - 1) * le
              , [ue,ge] = (0,
            n.useState)(ce)
              , [ve] = (0,
            ne.ok)(ye(ye({}, D.mJ6), {}, {
                limit: le,
                offset: ue
            }));
            c || ve._refine.push(`cgid=${null == p ? void 0 : p.id}`),
            ve._refine.push(D.cEt);
            const {_refine: fe} = ve
              , Ee = (0,
            C.A)(ve, me)
              , {isFetched: be, isFetching: xe, isRefetching: he, data: we} = (0,
            u.useProductSearch)({
                parameters: ye(ye({}, Ee), {}, {
                    limit: le,
                    allVariationProperties: !0,
                    allImages: !0,
                    expand: ["promotions", "variations", "prices", "images", "custom_properties", "page_meta_tags"],
                    refine: fe,
                    c_country: null == s ? void 0 : s.id,
                    select: "(hits.(**))"
                })
            }, {
                keepPreviousData: !0,
                enabled: q && (null == ve ? void 0 : ve.limit) && (null == ve ? void 0 : ve.limit) > 0
            });
            (0,
            n.useEffect)(( () => {
                q && (Ee.q !== J && Y(Ee.q),
                z(xe),
                B(he),
                Q(be))
            }
            ), [q, xe, he, be]),
            (0,
            n.useEffect)(( () => {
                z(f),
                B(x),
                Q(be)
            }
            ), [f, x, h]),
            (0,
            n.useEffect)(( () => {
                q && we && ($(Z ? l : R.concat(null == we ? void 0 : we.hits)),
                K(R.length),
                H(!1))
            }
            ), [we]),
            (0,
            n.useEffect)(( () => {
                U && P.current && P.current.focus()
            }
            ), [U]);
            const Ae = () => {
                R.length === k.current.querySelectorAll(".product-tile").length && H(!0)
            }
            ;
            (0,
            n.useEffect)(( () => {
                $(l),
                ge(0),
                ee(!0)
            }
            ), [l]);
            const _e = m - (null == R ? void 0 : R.length) || 0
              , Se = (0,
            n.useCallback)((e => {
                w ? o.sendClickSearch(w, e) : p && o.sendClickCategory(p, e)
            }
            ), [])
              , Te = (0,
            N.I)(p, A, w);
            return n.createElement(y.a, (0,
            r.A)({}, !c && {
                borderBottomWidth: 1,
                borderColor: "borderGray"
            }, a), m && n.createElement(de, {
                total: m
            }), n.createElement(V.A, {
                searchQuery: w,
                metaData: Te
            }), n.createElement(oe.r, {
                as: "ul",
                listStyleType: "none",
                columns: [2, 2, 3, 4, 4, 5],
                spacingX: 10,
                spacingY: {
                    base: 24,
                    lg: 70
                },
                ref: k
            }, !(0,
            g.Gk)() || (!F && !M || G) && l ? null == R || null === (t = R.filter((e => {
                var t;
                return (null == e || null === (t = e.variants) || void 0 === t ? void 0 : t.every((e => {
                    var t, l;
                    return (null == e || null === (t = e.variationValues) || void 0 === t ? void 0 : t.size) && (null == e || null === (l = e.variationValues) || void 0 === l ? void 0 : l.color)
                }
                ))) || "set" === (null == e ? void 0 : e.hitType)
            }
            ))) || void 0 === t ? void 0 : t.map(( (e, t) => {
                var l;
                const r = null == e ? void 0 : e.productId
                  , a = !(null == _ || null === (l = _.customerProductListItems) || void 0 === l || !l.find((e => (null == e ? void 0 : e.productId) === r)));
                return n.createElement(y.a, {
                    key: null == e ? void 0 : e.productId,
                    as: "li"
                }, n.createElement(se.Ay, {
                    className: "product-tile",
                    "data-testid": `sf-product-tile-${null == e ? void 0 : e.productId}`,
                    product: e,
                    isFavourite: a,
                    isFavIconInTitle: !0,
                    isRefreshingData: (F || M) && G,
                    onClick: () => Se(e),
                    onFavouriteToggle: t => (t ? T : O)(e),
                    dynamicImageProps: {
                        widths: ["50vw", "50vw", "33vw", "25vw", "25vw", "20vw"]
                    },
                    listHasNoMargin: !0,
                    index: t,
                    focusRef: t === X ? P : null,
                    onLoad: Ae,
                    isImageLazyLoading: t > 4
                }))
            }
            )) : new Array(20).fill(0).map(( (e, t) => n.createElement(se.EA, {
                key: `skeleton-${t}`
            })))), n.createElement(y.a, {
                textAlign: "center",
                pb: ["70px", null, null, "80px"]
            }, m > (null == R ? void 0 : R.length) && n.createElement(S.$, {
                variant: "link",
                mt: ["70px", null, null, "80px"],
                "aria-label": i.formatMessage({
                    defaultMessage: [{
                        type: 0,
                        value: "Load "
                    }, {
                        type: 1,
                        value: "nbRemainingProduct"
                    }, {
                        type: 0,
                        value: " additional products"
                    }],
                    id: "product_list.pagination.load_more.arialabel"
                }, {
                    nbRemainingProduct: _e
                }),
                onClick: () => {
                    const e = Z || c ? te : D.EjN;
                    ee(!1),
                    ge(ue + e),
                    W(!0)
                }
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Load more +"
                }, {
                    type: 1,
                    value: "nbRemainingProduct"
                }],
                id: "product_list.pagination.load_more",
                values: {
                    nbRemainingProduct: _e
                }
            }))))
        }
        ;
        ve.propTypes = {
            subSet: o().oneOfType([o().object, o().array])
        };
        const fe = ve;
        var Ee = l(65958)
          , be = l(75828)
          , xe = l(46004)
          , he = l(7424)
          , we = l(85353)
          , Ae = l(60946)
          , _e = l(29370)
          , Se = l(63391)
          , Te = l(89151);
        const Oe = () => {
            const {category: e} = (0,
            v.VV)()
              , t = {
                title: (null == e ? void 0 : e.c_faqTitle) || "",
                items: [{
                    question: null == e ? void 0 : e.c_faqQuestion1,
                    answer: null == e ? void 0 : e.c_faqAnswer1
                }, {
                    question: null == e ? void 0 : e.c_faqQuestion2,
                    answer: null == e ? void 0 : e.c_faqAnswer2
                }, {
                    question: null == e ? void 0 : e.c_faqQuestion3,
                    answer: null == e ? void 0 : e.c_faqAnswer3
                }, {
                    question: null == e ? void 0 : e.c_faqQuestion4,
                    answer: null == e ? void 0 : e.c_faqAnswer4
                }, {
                    question: null == e ? void 0 : e.c_faqQuestion5,
                    answer: null == e ? void 0 : e.c_faqAnswer5
                }].filter((e => e.question && e.answer))
            };
            return t.title && 0 !== t.items.length ? n.createElement(be.x, {
                templateColumns: {
                    base: "1fr",
                    lg: "1fr 1fr"
                },
                gap: {
                    base: 45,
                    lg: 60
                }
            }, n.createElement(we.D, {
                as: "h2",
                fontSize: "3xl",
                textTransform: "uppercase"
            }, t.title), n.createElement(y.a, null, n.createElement(Ae.n, {
                allowToggle: !0,
                reduceMotion: !0,
                borderTop: "1px solid",
                borderColor: "borderGray"
            }, t.items.map(( (e, t) => n.createElement(_e.A, {
                key: t,
                borderTop: "none",
                borderBottom: "1px solid",
                borderColor: "borderGray"
            }, ( ({isExpanded: t}) => n.createElement(n.Fragment, null, n.createElement(we.D, {
                as: "h3"
            }, n.createElement(Se.J, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 12,
                paddingStart: 0,
                paddingEnd: 6,
                gap: 10
            }, n.createElement(_.E, {
                as: "span",
                align: "left",
                textStyle: "eyeBrowSmall"
            }, e.question), t ? n.createElement(F.Mt, {
                boxSize: "12px"
            }) : n.createElement(F.D3, {
                boxSize: "12px"
            }))), n.createElement(Te.v, {
                px: 0,
                paddingTop: 0,
                paddingBottom: 12
            }, n.createElement(_.E, {
                align: "left",
                textStyle: "bodySmall",
                color: "darkGray"
            }, e.answer)))))))))) : null
        }
        ;
        Oe.propTypes = {};
        const ke = Oe;
        var Pe = l(47675)
          , Ce = l(92176)
          , Ie = l(72176)
          , Le = l(87916);
        const je = ({categories: e=[], onSelect: t=g.lQ}) => 0 === e.length ? null : n.createElement(Ee.B, {
            spacing: [24, 24, 24, 20]
        }, n.createElement(_.E, {
            as: "h2",
            textStyle: "eyeBrowSmall",
            textTransform: "uppercase"
        }, n.createElement(b.A, {
            defaultMessage: [{
                type: 0,
                value: "Also discover:"
            }],
            id: "product_list.sibling_categories.heading"
        })), n.createElement(Ie.B8, {
            display: "flex",
            flexWrap: "wrap",
            rowGap: [20, 20, 20, 10],
            columnGap: ["45px", "45px", "45px", 70]
        }, null == e ? void 0 : e.slice(0, 4).map(( ({id: e, displayName: l}) => n.createElement(Ie.ck, {
            key: e
        }, n.createElement(Le.A, {
            href: `/category/${e}`,
            onClick: t,
            useNavLink: !0
        }, l))))));
        je.propTypes = {
            categories: o().array,
            onSelect: o().func
        };
        const Re = je
          , De = {
            "commerce_layouts.pdBottomPLPLayout": xe.Ar
        }
          , $e = ({category: e={}}) => {
            var t, l;
            const [r] = (0,
            n.useState)({
                components: De
            })
              , a = (null == e ? void 0 : e.c_bottomPLPLayoutID) || ""
              , i = (0,
            B.uD)()
              , {data: o} = (0,
            u.usePage)({
                parameters: {
                    pageId: "bottom-plp-page"
                }
            }, {
                staleTime: i
            })
              , s = null == o || null === (t = o.regions) || void 0 === t || null === (l = t[0].components) || void 0 === l ? void 0 : l.find((e => {
                var t;
                return (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.bottomPLPVariantID) === a
            }
            ))
              , c = (null == e ? void 0 : e.c_bottomDescription) && n.createElement(_.E, {
                textStyle: "bodyLarge2",
                color: "darkGray"
            }, null == e ? void 0 : e.c_bottomDescription)
              , d = null == e ? void 0 : e.c_rndSiblingCategories;
            return n.createElement(y.a, {
                as: "section"
            }, s && n.createElement(he.PageContext.Provider, {
                value: r
            }, n.createElement(he.Component, {
                component: s
            })), n.createElement(Ee.B, {
                as: "section",
                px: [10, 10, 20, 20],
                py: [45, 45, 45, 70],
                gap: [45, 45, 45, 35]
            }, n.createElement(ke, null), n.createElement(be.x, {
                templateColumns: {
                    base: "1fr",
                    lg: "1fr 1fr"
                },
                gap: {
                    base: 45,
                    lg: 60
                }
            }, n.createElement(Pe.L, {
                above: "lg"
            }, c), n.createElement(y.a, {
                display: d ? "block" : {
                    base: "none",
                    lg: "block"
                }
            }, d && n.createElement(Re, {
                categories: d
            })), n.createElement(Ce.w, {
                above: "lg"
            }, c))))
        }
        ;
        $e.propTypes = {
            category: o().object
        };
        const Me = $e
          , ze = () => {
            const {category: e, productSearchResult: t} = (0,
            v.VV)();
            return n.createElement(n.Fragment, null, n.createElement(f.A, null), n.createElement(y.a, {
                as: "section"
            }, n.createElement(Q, null), n.createElement(fe, {
                subSet: null == t ? void 0 : t.hits
            }), n.createElement(Me, {
                category: e
            }), n.createElement(le, null)))
        }
        ;
        ze.propTypes = {};
        const Fe = ze;
        var Ve = l(13682)
          , Ne = l(9e4);
        const Be = ({productList: e, category: t, layoutIndex: l, regions: r}) => {
            let a = [];
            return r && (a = r[0].components || []),
            n.createElement(w.s, {
                justifyContent: "center",
                mx: [-10, null, null, "auto"],
                pt: [34, null, null, 70],
                pb: ["44px", null, null, 70]
            }, a.map(( (r, a) => (r.productList = e,
            r.category = t,
            r.imageSizes = ["100vw", "100vw", "100vw", "50vw", "50vw", "60vw"],
            r.layoutIndex = l,
            n.createElement(y.a, {
                key: (null == r ? void 0 : r.id) || a,
                flex: ["1 0 100%", null, "initial"],
                width: ["100%", null, null, "calc(50vw - 25px)", null, "calc(60vw - 25px)"],
                maxWidth: "1487px"
            }, n.createElement(he.Component, {
                component: r
            }))))))
        }
        ;
        Be.propTypes = {
            productList: o().array,
            category: o().object,
            layoutIndex: o().number,
            regions: o().arrayOf(o().shape({
                id: o().string,
                components: o().arrayOf(o().shape({
                    data: o().object,
                    id: o().string,
                    typeId: o().string
                }))
            }))
        };
        const Ge = ({productId: e, imageType: t, productList: l, category: r, imageSizes: a, layoutIndex: i}) => {
            var o;
            const s = (0,
            ie.A)()
              , c = null == l ? void 0 : l.find((t => t.productId === e))
              , {wishlist: u, addProductToWishlist: d, removeProductFromWishlist: p} = (0,
            re.G)()
              , m = !(null == u || null === (o = u.customerProductListItems) || void 0 === o || !o.find((t => (null == t ? void 0 : t.productId) === e)))
              , g = (0,
            n.useCallback)((e => {
                r && s.sendClickCategory(r, e)
            }
            ), []);
            return c ? n.createElement(se.Ay, {
                className: "product-tile",
                "data-testid": `sf-product-tile-${c}`,
                product: c,
                isFavourite: m,
                isFavIconInTitle: !0,
                onClick: () => g(c),
                onFavouriteToggle: e => (e ? d : p)(c),
                dynamicImageProps: {
                    widths: a || ["384px", "384px", "400px", "360px", "480px", "505px"]
                },
                mainImageType: t,
                hoverImageType: "front" !== t ? "front" : null,
                isImageLazyLoading: i > 0
            }) : n.createElement(se.EA, null)
        }
        ;
        Ge.propTypes = {
            productId: o().string.isRequired,
            imageType: o().string,
            displayPriority: o().bool,
            productList: o().array,
            category: o().object,
            imageSizes: o().oneOfType([o().array, o().string, o().object]),
            layoutIndex: o().number
        };
        const Qe = ({productList: e, category: t, layoutIndex: l, regions: r}) => {
            let a = [];
            return r && (a = r[0].components || []),
            n.createElement(oe.r, {
                as: "ul",
                listStyleType: "none",
                columns: [2],
                spacingX: 10,
                px: [0, 0, 0, "14.3%"],
                py: [0, 0, 0, 70]
            }, a.map(( (r, a) => (r.productList = e,
            r.category = t,
            r.imageSizes = ["50vw", "50vw", "50vw", "35vw", "35vw", "35vw"],
            r.layoutIndex = l,
            n.createElement(Ne.E, {
                as: "li",
                key: (null == r ? void 0 : r.id) || a
            }, n.createElement(he.Component, {
                component: r
            }))))))
        }
        ;
        Qe.propTypes = {
            productList: o().array,
            category: o().object,
            layoutIndex: o().number,
            regions: o().arrayOf(o().shape({
                id: o().string,
                components: o().arrayOf(o().shape({
                    data: o().object,
                    id: o().string,
                    typeId: o().string
                }))
            }))
        };
        const qe = ({productList: e, category: t, layoutIndex: l, regions: r}) => {
            let a = [];
            return r && (a = r[0].components || []),
            n.createElement(w.s, {
                as: "ul",
                listStyleType: "none",
                rowGap: 24,
                justifyContent: "center",
                wrap: "wrap",
                mx: [-5, null, -10, -5]
            }, a.map(( (r, a) => (r.productList = e,
            r.category = t,
            r.imageSizes = ["50vw", "50vw", "33vw", "25vw", "25vw", "20vw"],
            r.layoutIndex = l,
            n.createElement(y.a, {
                as: "li",
                key: (null == r ? void 0 : r.id) || a,
                flex: ["0 0 50%", "0 0 50%", "0 0 33%", "0 0 25%", "0 0 25%", "0 0 20%"],
                maxWidth: ["50%", "50%", "33%", "25%", "25%", "20%"],
                px: 5
            }, n.createElement(he.Component, {
                component: r
            }))))))
        }
        ;
        qe.propTypes = {
            productList: o().array,
            category: o().object,
            layoutIndex: o().number,
            regions: o().arrayOf(o().shape({
                id: o().string,
                components: o().arrayOf(o().shape({
                    data: o().object,
                    id: o().string,
                    typeId: o().string
                }))
            }))
        };
        var We = l(43779)
          , Ue = l(3629)
          , He = l(65574);
        const Xe = ({link: e, smallImage: t, mediumImage: l, largeImage: a, xlargeImage: i, xxlargeImage: o, imageTitle: s, imageAlt: c, custom: u, imageSizes: d, layoutIndex: p}) => {
            var m;
            const g = (0,
            x.A)((0,
            Ue.A)({
                smallEl: t,
                mediumEl: l,
                largeEl: a,
                xlargeEl: i,
                xxlargeEl: o
            }))
              , v = (0,
            He.d)(null == u ? void 0 : u.link) || e
              , f = "EXTERNAL" === (null == u || null === (m = u.link) || void 0 === m ? void 0 : m.type)
              , E = v ? ce.N : y.a
              , b = v ? {
                as: f ? ce.N : T.Link,
                href: v,
                to: v,
                textDecoration: "none"
            } : {};
            return n.createElement(E, (0,
            r.A)({
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                textAlign: "center",
                "aria-label": c || s
            }, b), g && (null == g ? void 0 : g.url) && n.createElement(We.A, {
                src: `${null == g ? void 0 : g.url}[?sw={width}]`,
                widths: "100%" === d ? D.MHv.full : d,
                flex: ["1 0 100%", null, "auto"],
                imageProps: {
                    width: "100%",
                    loading: p < 1 ? "eager" : "lazy",
                    fetchpriority: p < 1 ? "high" : null,
                    alt: "empty" === c ? "" : c,
                    title: "empty" === s ? "" : s
                }
            }))
        }
        ;
        Xe.propTypes = {
            link: o().string,
            smallImage: o().object.isRequired,
            mediumImage: o().object,
            largeImage: o().object,
            xlargeImage: o().object,
            xxlargeImage: o().object,
            imageTitle: o().string,
            imageAlt: o().string,
            custom: o().shape({
                link: o().shape({
                    target: o().string,
                    type: o().string
                })
            }),
            displayPriority: o().bool,
            imageSizes: o().any,
            layoutIndex: o().number
        };
        var Ke = l(44051);
        const Je = ["_refine"];
        function Ye(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function Ze(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ye(Object(l), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : Ye(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const et = {
            "commerce_assets.pdcEditoProductTile": Ge,
            "commerce_assets.pdcEditoPushContent": Xe,
            "commerce_layouts.pdcEditoBigTile": Be,
            "commerce_layouts.pdcEditoBigTilesDuo": Qe,
            "commerce_layouts.pdcEditoStandardTilesGroup": qe
        }
          , tt = e => {
            var t;
            let l = (0,
            r.A)({}, ((0,
            Ve.A)(e),
            e));
            const {category: a, editoPage: i, searchQuery: o, metatags: s} = (0,
            v.VV)()
              , c = null === (t = (0,
            B.JU)(i, "tiles")) || void 0 === t ? void 0 : t.components
              , [p] = (0,
            n.useState)({
                components: et
            })
              , m = (0,
            N.I)(a, s, o)
              , [g] = (0,
            ne.ok)(Ze(Ze({}, D.mJ6), {}, {
                limit: D.Q$K
            }))
              , E = (0,
            d.g)();
            (0,
            Ke.B)(E, v.uu),
            E.categoryId && g._refine.push(`cgid=${E.categoryId}`);
            const {_refine: b} = g
              , x = (0,
            C.A)(g, Je)
              , {data: h} = (0,
            u.useProductSearch)({
                parameters: Ze(Ze({}, x), {}, {
                    perPricebook: !0,
                    allVariationProperties: !0,
                    allImages: !0,
                    expand: ["promotions", "variations", "prices", "images", "custom_properties"],
                    refine: b
                })
            }, {
                keepPreviousData: !0
            })
              , w = (null == h ? void 0 : h.selectedRefinements) && Object.keys(h.selectedRefinements).some((e => !v.uu.includes(e))) || (null == h ? void 0 : h.selectedSortingOption) && "best-matches" !== h.selectedSortingOption;
            return n.createElement(n.Fragment, null, n.createElement(f.A, null), n.createElement(y.a, {
                as: "section"
            }, n.createElement(Q, null), n.createElement(y.a, l, n.createElement(V.A, {
                searchQuery: o,
                metaData: m
            }), w ? n.createElement(fe, {
                subSet: null == h ? void 0 : h.hits
            }) : n.createElement(oe.r, {
                as: "ul",
                listStyleType: "none",
                mx: [10, null, null, 20],
                spacingY: 24
            }, null == c ? void 0 : c.map(( (e, t) => (e.productList = null == h ? void 0 : h.hits,
            e.category = a,
            e.layoutIndex = t,
            n.createElement(Ne.E, {
                as: "li",
                key: e.id
            }, n.createElement(he.PageContext.Provider, {
                value: p
            }, n.createElement(he.Component, {
                component: e
            }))))))))), n.createElement(Me, {
                category: a
            }), n.createElement(le, null))
        }
        ;
        tt.propTypes = {};
        const lt = tt
          , rt = () => {
            const {category: e} = (0,
            v.VV)();
            return n.createElement(y.a, {
                as: "section"
            }, "@TODO: create family PLP")
        }
        ;
        rt.propTypes = {};
        const at = rt;
        var nt = l(32818)
          , it = l(84939);
        function ot(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function st(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ot(Object(l), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : ot(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const ct = {
            sm: {
                1: 768,
                2: 384
            },
            md: {
                2: 600,
                3: 400
            },
            lg: {
                2: 720,
                3: 480
            },
            xl: {
                2: 960,
                3: 640
            },
            "2xl": {
                2: 1260,
                3: 840
            }
        }
          , ut = {
            5: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile4"\n                "tile5 tile5"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "5xl"],
                    widthMapping: [2, 2, 2, 2, 1]
                },
                md: {
                    templateColumns: "repeat(6, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile1 tile2 tile2 tile3 tile3"\n                "tile4 tile4 tile4 tile5 tile5 tile5"\n            ',
                    size: ["4xl", "4xl", "4xl", "5xl", "5xl"],
                    widthMapping: [3, 3, 3, 2, 2]
                },
                lg: {
                    size: ["5xl", "5xl", "5xl", "6xl", "6xl"]
                }
            },
            6: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile3"\n                "tile4 tile5"\n                "tile6 tile6"\n            ',
                    size: ["4xl", "4xl", "5xl", "4xl", "4xl", "5xl"],
                    widthMapping: [2, 2, 1, 2, 2, 1]
                },
                md: {
                    templateColumns: "repeat(3, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2 tile3"\n                "tile4 tile5 tile6"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "4xl", "4xl"],
                    widthMapping: [3, 3, 3, 3, 3, 3]
                },
                lg: {
                    size: ["5xl", "5xl", "5xl", "5xl", "5xl", "5xl"]
                }
            },
            7: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile4"\n                "tile5 tile5"\n                "tile6 tile7"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "5xl", "4xl", "4xl"],
                    widthMapping: [2, 2, 2, 2, 1, 2, 2]
                },
                md: {
                    templateColumns: "repeat(6, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile1 tile1 tile2 tile2 tile2"\n                "tile3 tile3 tile4 tile4 tile5 tile5"\n                "tile6 tile6 tile6 tile7 tile7 tile7"\n            ',
                    size: ["5xl", "5xl", "4xl", "4xl", "4xl", "5xl", "5xl"],
                    widthMapping: [2, 2, 3, 3, 3, 2, 2]
                },
                lg: {
                    size: ["6xl", "6xl", "5xl", "5xl", "5xl", "6xl", "6xl"]
                }
            },
            8: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile4"\n                "tile5 tile5"\n                "tile6 tile7"\n                "tile8 tile8"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "5xl", "4xl", "4xl", "5xl"],
                    widthMapping: [2, 2, 2, 2, 1, 2, 2, 1]
                },
                md: {
                    templateColumns: "repeat(6, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile1 tile2 tile2 tile3 tile3"\n                "tile4 tile4 tile4 tile5 tile5 tile5"\n                "tile6 tile6 tile7 tile7 tile8 tile8"\n            ',
                    size: ["4xl", "4xl", "4xl", "5xl", "5xl", "4xl", "4xl", "4xl"],
                    widthMapping: [3, 3, 3, 2, 2, 3, 3, 3]
                },
                lg: {
                    size: ["5xl", "5xl", "5xl", "6xl", "6xl", "5xl", "5xl", "5xl"]
                }
            },
            9: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile4"\n                "tile5 tile5"\n                "tile6 tile7"\n                "tile8 tile9"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "5xl", "4xl", "4xl", "4xl", "4xl"],
                    widthMapping: [2, 2, 2, 2, 1, 2, 2, 2, 2]
                },
                md: {
                    templateColumns: "repeat(6, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile1 tile1 tile2 tile2 tile2"\n                "tile3 tile3 tile4 tile4 tile5 tile5"\n                "tile6 tile6 tile6 tile7 tile7 tile7"\n                "tile8 tile8 tile8 tile9 tile9 tile9"\n            ',
                    size: ["5xl", "5xl", "4xl", "4xl", "4xl", "5xl", "5xl", "5xl", "5xl"],
                    widthMapping: [2, 2, 3, 3, 3, 2, 2, 2, 2]
                },
                lg: {
                    size: ["6xl", "6xl", "5xl", "5xl", "5xl", "6xl", "6xl", "6xl", "6xl"]
                }
            },
            10: {
                base: {
                    templateColumns: "repeat(2, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile2"\n                "tile3 tile4"\n                "tile5 tile5"\n                "tile6 tile7"\n                "tile8 tile9"\n                "tile10 tile10"\n            ',
                    size: ["4xl", "4xl", "4xl", "4xl", "5xl", "4xl", "4xl", "4xl", "4xl", "5xl"],
                    widthMapping: [2, 2, 2, 2, 1, 2, 2, 2, 2, 1]
                },
                md: {
                    templateColumns: "repeat(6, 1fr)",
                    gridTemplateAreas: '\n                "tile1 tile1 tile2 tile2 tile3 tile3"\n                "tile4 tile4 tile4 tile5 tile5 tile5"\n                "tile6 tile6 tile7 tile7 tile8 tile8"\n                "tile9 tile9 tile9 tile10 tile10 tile10"\n            ',
                    size: ["4xl", "4xl", "4xl", "5xl", "5xl", "4xl", "4xl", "4xl", "5xl", "5xl"],
                    widthMapping: [3, 3, 3, 2, 2, 3, 3, 3, 2, 2]
                },
                lg: {
                    size: ["5xl", "5xl", "5xl", "6xl", "6xl", "5xl", "5xl", "5xl", "6xl", "6xl"]
                }
            }
        }
          , dt = () => {
            const {formatMessage: e} = (0,
            E.A)()
              , {category: t, total: l, isProductListLoading: r, metatags: a} = (0,
            v.VV)()
              , i = (0,
            d.g)()
              , [o,s] = (0,
            n.useState)(!1)
              , c = Array.from({
                length: 10
            }, ( (e, l) => {
                const r = l + 1
                  , a = t[`c_mosaicImage${r}`]
                  , n = t[`c_mosaicLink${r}`]
                  , i = t[`c_mosaicTitle${r}`];
                if (a && n && i)
                    return st(st({
                        image: a,
                        link: n,
                        title: i
                    }, t[`c_mosaicImageAlt${r}`] && {
                        alt: t[`c_mosaicImageAlt${r}`]
                    }), t[`c_mosaicImageTitle${r}`] && {
                        imageTitle: t[`c_mosaicImageTitle${r}`]
                    })
            }
            )).filter(Boolean)
              , u = c.length
              , p = (0,
            N.I)(t, a);
            return n.createElement(n.Fragment, null, n.createElement(V.A, {
                metaData: p
            }), n.createElement(f.A, {
                containerProps: {
                    alignItems: "center"
                },
                descriptionProps: {
                    maxWidth: {
                        base: "330px",
                        md: "590px"
                    },
                    textAlign: "center"
                }
            }), n.createElement(y.a, {
                as: "section"
            }, n.createElement(w.s, {
                direction: "row",
                justify: "space-between",
                align: "center",
                gap: "30px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                pb: 9,
                m: [10, null, "13px 20px 4px"]
            }, n.createElement(P, {
                categories: null == t ? void 0 : t.c_linkedCategories,
                containerProps: {
                    m: "0",
                    p: "0",
                    overflowX: "none"
                }
            }), !r && n.createElement(_.E, {
                variant: "bodySmall",
                color: "darkGray",
                whiteSpace: "nowrap"
            }, e(Lt, {
                total: l || 0
            }))), u > 4 && n.createElement(be.x, {
                as: "ul",
                listStyleType: "none",
                templateColumns: {
                    base: ut[u].base.templateColumns,
                    md: ut[u].md.templateColumns
                },
                gridTemplateAreas: {
                    base: ut[u].base.gridTemplateAreas,
                    md: ut[u].md.gridTemplateAreas
                },
                gap: "10px"
            }, c.map(( (e, t) => {
                const l = ut[u].base.size[t] || "4xl"
                  , r = ut[u].md.size[t] || "4xl"
                  , a = ut[u].lg.size[t] || "5xl"
                  , i = ut[u].base.widthMapping[t]
                  , c = ut[u].md.widthMapping[t];
                return n.createElement(y.a, {
                    key: `${e.image}-${t}`,
                    gridArea: `tile${t + 1}`,
                    as: "li"
                }, (0,
                B.Gk)() && e && e.image ? n.createElement(it.A, {
                    href: e.link,
                    display: "block",
                    variant: "noUnderline",
                    position: "relative",
                    height: "100%"
                }, !o && t < 5 && n.createElement(h.E, {
                    aspectRatio: "59 / 74",
                    width: "100%"
                }), n.createElement(We.A, {
                    src: `${e.image}[?sw={width}]`,
                    widths: [ct.sm[i], ct.sm[i], ct.md[c], ct.lg[c], ct.xl[c], ct["2xl"][c]],
                    imageProps: {
                        width: "100%",
                        loading: "eager",
                        fetchpriority: "high",
                        alt: e.alt || "",
                        title: e.imageTitle || "",
                        onLoad: () => s(!0),
                        display: o || t >= 5 ? "block" : "none"
                    }
                }), n.createElement(nt.R, {
                    width: "full",
                    padding: {
                        base: "10px",
                        lg: "20px"
                    },
                    display: o || t >= 5 ? "block" : "none"
                }, n.createElement(we.D, {
                    as: "h2",
                    size: {
                        base: l,
                        md: r,
                        lg: a
                    },
                    color: "white",
                    textTransform: "uppercase",
                    dangerouslySetInnerHTML: {
                        __html: e.title
                    }
                }))) : n.createElement(h.E, {
                    aspectRatio: "59 / 74",
                    width: "100%"
                }))
            }
            ))), n.createElement(w.s, {
                justify: "center",
                px: {
                    base: "10px",
                    lg: "20px"
                },
                py: {
                    base: "70px",
                    lg: "80px"
                }
            }, n.createElement(it.A, {
                variant: "secondary",
                size: "md",
                whiteSpace: "nowrap",
                href: `/category/${i.categoryId}`,
                useNavLink: !0
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "View all "
                }, {
                    type: 1,
                    value: "totalCount"
                }],
                id: "product_list.mosaic.shop_all",
                values: {
                    totalCount: !r && n.createElement(_.E, {
                        as: "span",
                        color: "darkGray",
                        paddingLeft: "3px"
                    }, "(", l || 0, " products)")
                }
            })))))
        }
        ;
        dt.propTypes = {};
        const pt = dt
          , mt = () => {
            var e;
            const {category: t, isRefetching: l, isFetched: r, productSearchResult: a, searchParams: i, searchQuery: o, metatags: s} = (0,
            v.VV)()
              , {wishlist: c, addProductToWishlist: u, removeProductFromWishlist: d} = (0,
            re.G)()
              , p = (0,
            ie.A)()
              , m = (0,
            N.I)(t, s, o)
              , E = (0,
            n.useCallback)((e => {
                o ? p.sendClickSearch(o, e) : t && p.sendClickCategory(t, e)
            }
            ), []);
            return n.createElement(n.Fragment, null, n.createElement(V.A, {
                metaData: m
            }), n.createElement(f.A, null), n.createElement(y.a, {
                as: "section"
            }, n.createElement(Q, {
                isLinkedCategories: !1
            }), n.createElement(oe.r, {
                columns: [2, 2, 3, 4, 4, 5],
                spacingX: 10,
                spacingY: {
                    base: 24,
                    lg: 70
                },
                borderTopWidth: 1,
                borderColor: "borderGray"
            }, (0,
            g.Gk)() && (l && !r || !a) ? new Array(i.limit).fill(0).map(( (e, t) => n.createElement(se.EA, {
                key: `product-tile-skeleton-${t}`
            }))) : null == a || null === (e = a.hits) || void 0 === e ? void 0 : e.map(( (e, t) => {
                var a;
                const i = e.productId
                  , o = !(null == c || null === (a = c.customerProductListItems) || void 0 === a || !a.find((e => e.productId === i)));
                return n.createElement(se.Ay, {
                    "data-testid": `sf-product-tile-${e.productId}`,
                    key: e.productId,
                    product: e,
                    isFavourite: o,
                    isFavIconInTitle: !0,
                    isRefreshingData: l && r,
                    onClick: () => E(e),
                    onFavouriteToggle: t => (t ? u : d)(e),
                    dynamicImageProps: {
                        widths: ["50vw", "50vw", "33vw", "25vw", "25vw", "20vw"]
                    },
                    isImageLazyLoading: t > 3
                })
            }
            ))), n.createElement(le, null)))
        }
        ;
        var gt = l(10551);
        const yt = () => {
            var e, t, l;
            const {searchQuery: r, isProductListLoading: a, productSearchResult: i, onOpenRefinements: o, refinementsOpenRef: s, metatags: c} = (0,
            v.VV)()
              , u = [{
                id: "description",
                value: (null == c || null === (e = c.find((e => "description" === e.id))) || void 0 === e ? void 0 : e.value) || r
            }, {
                id: "title",
                value: (null == c || null === (t = c.find((e => "title" === e.id))) || void 0 === t ? void 0 : t.value) || r
            }, {
                id: "keywords",
                value: (null == c || null === (l = c.find((e => "keywords" === e.id))) || void 0 === l ? void 0 : l.value) || ""
            }, {
                id: "robots",
                value: "noindex"
            }];
            return n.createElement(y.a, {
                as: "section",
                borderTopWidth: 1,
                borderColor: "borderGray"
            }, n.createElement(V.A, {
                searchQuery: r,
                metaData: u
            }), n.createElement(w.s, {
                direction: "row",
                justify: "space-between",
                align: "center",
                gap: "6px",
                px: {
                    base: 10,
                    md: 20
                },
                py: {
                    base: "44px",
                    md: "34px"
                },
                position: "sticky",
                top: {
                    base: "64px",
                    md: "52px"
                },
                bg: "white",
                zIndex: 1
            }, n.createElement(gt.T, {
                align: "flex-start"
            }, r && n.createElement(_.E, {
                as: "h1",
                textStyle: "bodyLarge2"
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: 'Results for "'
                }, {
                    type: 1,
                    value: "search"
                }, {
                    type: 0,
                    value: '"'
                }],
                id: "product_list.search.results_for",
                values: {
                    search: r
                }
            })), a ? n.createElement(h.E, {
                height: "20px",
                width: "80px"
            }) : i && n.createElement(_.E, {
                variant: "bodyBase2",
                color: "darkGray",
                whiteSpace: "nowrap"
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Showing "
                }, {
                    type: 1,
                    value: "total"
                }, {
                    type: 0,
                    value: ' results for "'
                }, {
                    type: 1,
                    value: "search"
                }, {
                    type: 0,
                    value: '"'
                }],
                id: "product_list.search.total",
                values: {
                    total: (null == i ? void 0 : i.total) || 0,
                    search: r
                }
            }))), !a && n.createElement(S.$, {
                variant: "primary",
                height: "40px",
                rightIcon: n.createElement(F.A, {
                    boxSize: 4
                }),
                onClick: o,
                ref: s
            }, n.createElement(b.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Filter"
                }],
                id: "product_list.button.filter"
            }))), (null == i ? void 0 : i.hits) && n.createElement(fe, {
                subSet: i.hits
            }), n.createElement(le, null))
        }
        ;
        yt.propTypes = {};
        const vt = yt
          , ft = ({categoryType: e="", isSearch: t=!1}) => {
            if (t)
                return n.createElement(vt, null);
            switch (e) {
            case "editorial":
                return n.createElement(lt, null);
            case "family":
                return n.createElement(at, null);
            case "mosaic":
                return n.createElement(pt, null);
            case "pattern":
                return n.createElement(mt, null);
            default:
                return n.createElement(Fe, null)
            }
        }
        ;
        ft.propTypes = {
            categoryType: o().string,
            isSearch: o().bool
        };
        const Et = ft;
        var bt = l(476)
          , xt = l(41080)
          , ht = l(62903)
          , wt = l(49262)
          , At = l(23042)
          , _t = l(28407)
          , St = l(29188)
          , Tt = l(4026)
          , Ot = l(30138);
        const kt = e => {
            const {site: t, locale: l} = (0,
            p.A)()
              , r = (0,
            d.zy)()
              , a = !!new URLSearchParams(r.search).get("q")
              , {getTokenWhenReady: n} = (0,
            u.useAccessToken)();
            return (0,
            St.I)({
                queryKey: ["categoryUrlLifeCycle", e],
                queryFn: (i = (0,
                _t.A)((function*() {
                    let r = null;
                    if (g.S$ && e && !a) {
                        const a = yield n()
                          , {app: i} = (0,
                        Tt.getConfig)()
                          , o = new Ot.A({
                            parameters: {
                                siteId: t.id,
                                organizationId: i.commerceAPI.parameters.organizationId,
                                locale: l.id
                            }
                        });
                        r = yield o.categoryUrlLifeCycle(t.id, a, {
                            categoryId: e
                        })
                    }
                    return r
                }
                )),
                function() {
                    return i.apply(this, arguments)
                }
                )
            });
            var i
        }
        ;
        function Pt(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function Ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pt(Object(l), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : Pt(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const It = (0,
        c.zR)({
            defaultMessage: [{
                type: 0,
                value: "Possible filters for: "
            }, {
                type: 1,
                value: "label"
            }],
            id: "product_list.refinements.legend"
        })
          , Lt = (0,
        c.zR)({
            defaultMessage: [{
                type: 6,
                value: "total",
                options: {
                    "=0": {
                        value: [{
                            type: 0,
                            value: "No products"
                        }]
                    },
                    one: {
                        value: [{
                            type: 7
                        }, {
                            type: 0,
                            value: " product"
                        }]
                    },
                    other: {
                        value: [{
                            type: 7
                        }, {
                            type: 0,
                            value: " products"
                        }]
                    }
                },
                offset: 0,
                pluralType: "cardinal"
            }],
            id: "product_list.total_products"
        })
          , jt = e => {
            var t, l;
            const {buildURLWithUTM: r} = (0,
            p.A)()
              , {isOutlet: a} = (0,
            wt.A)()
              , i = (0,
            d.g)()
              , o = (0,
            d.zy)()
              , s = !!new URLSearchParams(o.search).get("q")
              , {error: c, data: y, isError: f} = (0,
            u.useCategory)({
                parameters: {
                    id: i.categoryId,
                    levels: 2
                }
            }, {
                enabled: !s && !!i.categoryId
            })
              , {data: E} = kt(i.categoryId);
            if (g.S$ && null != E && null !== (t = E.data) && void 0 !== t && t.categoryIdToRedirect && null != E && null !== (l = E.data) && void 0 !== l && l.parentCategoryTree)
                return n.createElement(m.A, {
                    status: 301,
                    to: r((0,
                    At.XX)(E.data.categoryIdToRedirect))
                });
            var b;
            if (f && (null == c || null === (b = c.response) || void 0 === b ? void 0 : b.status))
                return n.createElement(d.rd, {
                    to: r("/" + D.PA0 + (a ? "-outlet" : ""))
                });
            return n.createElement(v.tO, {
                productListProps: Ct(Ct({}, e), {}, {
                    category: y
                })
            }, n.createElement(Rt, null))
        }
          , Rt = () => {
            const {productListPropsRest: e, searchQuery: t, category: l, showNoResults: a, categoryType: i, isSearch: o} = (0,
            v.VV)()
              , {usePageLoadAndCookies: c, triggerSearchEvent: u} = (0,
            ht.u)();
            return c(o ? "search-result" : "category"),
            (0,
            n.useEffect)(( () => {
                o && u(t)
            }
            ), [t]),
            n.createElement(y.a, (0,
            r.A)({
                className: "sf-product-list-page",
                "data-testid": "sf-product-list-page",
                layerStyle: "page",
                padding: "0"
            }, e), n.createElement(s.Helmet, null, n.createElement("title", null, (null == l ? void 0 : l.pageTitle) ?? t), n.createElement("meta", {
                name: "description",
                content: (null == l ? void 0 : l.pageDescription) ?? t
            }), n.createElement("meta", {
                name: "keywords",
                content: null == l ? void 0 : l.pageKeywords
            })), a ? n.createElement(bt.A, {
                searchQuery: t,
                category: l
            }) : n.createElement(n.Fragment, null, n.createElement(xt.A, null), n.createElement(Et, {
                categoryType: i,
                isSearch: o
            })))
        }
        ;
        jt.getTemplateName = () => "product-list",
        jt.propTypes = {
            onAddToWishlistClick: o().func,
            onRemoveWishlistClick: o().func,
            category: o().object
        };
        const Dt = jt
    }
    ,
    87540: (e, t, l) => {
        l.d(t, {
            A: () => f
        });
        var r = l(77810)
          , a = l(75826)
          , n = l.n(a)
          , i = l(41863)
          , o = l(97012)
          , s = l(29370)
          , c = l(21052)
          , u = l(63391)
          , d = l(89151)
          , p = l(72176)
          , m = l(87916)
          , g = l(23536)
          , y = l(17015);
        const v = ({category: e={}}) => {
            const {categories: t=[]} = e
              , {onSelect: l=y.lQ} = (0,
            o.VV)();
            return r.createElement(s.A, {
                as: "li",
                listStyleType: "none",
                border: "none",
                padding: 0,
                key: "show-all"
            }, ( ({isExpanded: e}) => r.createElement(r.Fragment, null, r.createElement(c.E, {
                as: "div",
                role: "heading",
                "aria-level": "2"
            }, r.createElement(u.J, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                py: 20
            }, r.createElement(c.E, {
                as: "span",
                align: "left",
                textStyle: "bodyLarge2"
            }, r.createElement(i.A, {
                defaultMessage: [{
                    type: 0,
                    value: "Categories"
                }],
                id: "category_links.button_text"
            })), e ? r.createElement(g.xj, {
                boxSize: "12px"
            }) : r.createElement(g.c1, {
                boxSize: "12px"
            }))), r.createElement(d.v, {
                paddingTop: 0,
                paddingBottom: 10
            }, r.createElement(p.B8, {
                display: "flex",
                flexDirection: "column",
                gap: 10
            }, t.map(( ({id: e, name: t}) => r.createElement(p.ck, {
                key: e
            }, r.createElement(m.A, {
                key: e,
                href: `/category/${e}`,
                onClick: l,
                useNavLink: !0
            }, t)))))))))
        }
        ;
        v.propTypes = {
            category: n().object
        };
        const f = v
    }
    ,
    97012: (e, t, l) => {
        l.d(t, {
            VV: () => j,
            tO: () => L,
            uu: () => C
        });
        var r = l(10939)
          , a = l(18801)
          , n = l(77810)
          , i = l(75826)
          , o = l.n(i)
          , s = l(64965)
          , c = l(90031)
          , u = l(62241)
          , d = l(79637)
          , p = l(83877)
          , m = l(55848)
          , g = l(85535)
          , y = l(93080)
          , v = l(6834)
          , f = l(17015)
          , E = l(77214)
          , b = l(32105)
          , x = l(73448)
          , h = l(7711)
          , w = l(36763)
          , A = l(62903)
          , _ = l(33044);
        const S = ["isLoading", "staticContext"]
          , T = ["_refine"];
        function O(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                l.push.apply(l, r)
            }
            return l
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(l), !0).forEach((function(t) {
                    (0,
                    r.A)(e, t, l[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : O(Object(l)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
                }
                ))
            }
            return e
        }
        const P = ["c_isNew"]
          , C = ["cgid", "c_subCategoryID", "c_orliweb_stat03_code_marche", "c_orliweb_stat20_mat_rgt", "c_color", "c_orliweb_stat10_type_prod"]
          , I = n.createContext()
          , L = ({productListProps: e, children: t}) => {
            var l, r, i, o, O;
            const {buildUrl: C} = (0,
            p.A)()
              , {isLoading: L, staticContext: j} = e
              , R = (0,
            a.A)(e, S)
              , {isOpen: D, onOpen: $, onClose: M} = (0,
            d.j)()
              , z = (0,
            h.A)()
              , F = (0,
            s.g)()
              , V = (0,
            s.zy)()
              , N = (0,
            s.W6)()
              , B = (0,
            g.A)()
              , G = (0,
            y.A)()
              , {res: Q} = (0,
            u.useServerContext)()
              , q = (0,
            n.useRef)()
              , W = (0,
            n.useRef)()
              , {triggerViewItemListEvent: U} = (0,
            A.u)()
              , [H,X] = (0,
            n.useState)(!1)
              , K = new URLSearchParams(V.search)
              , J = parseInt(K.get("p")) || 0;
            let Y = K.get("q");
            const Z = !!Y
              , ee = (0,
            E.uD)()
              , {data: te} = (0,
            c.usePage)({
                parameters: {
                    pageId: null == F ? void 0 : F.categoryId
                }
            }, {
                enabled: !(null == F || !F.categoryId),
                staleTime: ee
            })
              , le = V.pathname.includes("/mosaic/")
              , re = "mosaic" === (null == e || null === (l = e.category) || void 0 === l ? void 0 : l.c_categoryType)
              , ae = re && le
              , ne = !ae
              , ie = ae ? {
                select: "(total)"
            } : {
                allVariationProperties: !0,
                allImages: !0,
                expand: ["promotions", "variations", "prices", "images", "custom_properties", "page_meta_tags"]
            }
              , oe = re ? le ? "mosaic" : "classic" : te ? "editorial" : (null == e || null === (r = e.category) || void 0 === r ? void 0 : r.c_categoryType) || "";
            (0,
            n.useEffect)(( () => {
                var t;
                null != e && null !== (t = e.category) && void 0 !== t && t.c_categoryType && le && !re && N.replace(C(`/category/${F.categoryId}`))
            }
            ), [null == e || null === (i = e.category) || void 0 === i ? void 0 : i.c_categoryType, le, re]);
            const se = (0,
            E.Dw)(null == e || null === (o = e.category) || void 0 === o ? void 0 : o.id, null == e || null === (O = e.category) || void 0 === O ? void 0 : O.parentCategoryTree)
              , ce = f.S$ ? 100 : x.Q$K
              , ue = Z ? 0 : J > 1 ? (J - 1) * x.Q$K : 1 === J ? x.Q$K : 0;
            let de = k(k({}, x.mJ6), {}, Z ? {
                limit: x.DYX
            } : {
                limit: ce,
                offset: ue
            });
            const [pe,{stringify: me}] = (0,
            m.ok)(de);
            F.categoryId && pe._refine.push(`cgid=${F.categoryId}`),
            pe._refine.push(x.cEt);
            const {_refine: ge} = pe
              , ye = (0,
            a.A)(pe, T)
              , {shipToCountry: ve} = (0,
            w.A)()
              , {isLoading: fe, isFetched: Ee, isRefetching: be, data: xe} = (0,
            c.useProductSearch)({
                parameters: k(k(k({}, ye), ie), {}, {
                    refine: ge,
                    c_country: null == ve ? void 0 : ve.id
                })
            }, {
                keepPreviousData: !1,
                enabled: !f.S$ && (null == ye ? void 0 : ye.limit) && (null == ye ? void 0 : ye.limit) > 0
            })
              , he = fe || be;
            null != xe && xe.refinements && (xe.refinements = xe.refinements.filter(( ({attributeId: e}) => !P.includes(e)))),
            Q && Q.set("Cache-Control", `s-maxage=${b.kB}, stale-while-revalidate=${b.Yw}`),
            (0,
            n.useEffect)(( () => {
                be && window.scrollTo(0, 0),
                X(be)
            }
            ), [be]),
            (0,
            n.useEffect)(( () => {
                xe && null != xe && xe.hits && U(null == xe ? void 0 : xe.hits)
            }
            ), [xe]);
            const we = !ae && !fe && xe && !(null != xe && xe.hits)
              , {total: Ae, sortingOptions: _e} = xe || {}
              , Se = (null == _e ? void 0 : _e.find((e => e.id === (null == xe ? void 0 : xe.selectedSortingOption)))) ?? null;
            let Te, Oe;
            const ke = null == xe ? void 0 : xe.pageMetaTags;
            ne && (Te = (e, t, l, r=!0) => {
                const a = k({}, pe);
                if (delete a.offset,
                r) {
                    let r = a.refine[t] || [];
                    var n;
                    "string" == typeof r ? r = r.split("|") : "number" == typeof r && (r = [r]),
                    l ? r = null === (n = r) || void 0 === n ? void 0 : n.filter((t => t != e.value)) : r.push(e.value),
                    a.refine[t] = r,
                    0 === a.refine[t].length && delete a.refine[t]
                } else {
                    const r = a.refine[t];
                    delete a.refine[t],
                    l || e.value == r || (a.refine[t] = e.value)
                }
                z(Z ? `/search?${me(a)}` : `/category/${F.categoryId}?${me(a)}`)
            }
            ,
            Oe = (e="") => {
                const t = k({}, pe);
                var l;
                e.length ? null != t && null !== (l = t.refine) && void 0 !== l && l[e] && delete t.refine[e] : t.refine = [];
                const r = Z ? `/search?${me(t)}` : `/category/${F.categoryId}?${me(t)}`;
                z(r)
            }
            ),
            (0,
            n.useEffect)(( () => {
                if (xe)
                    if (Z) {
                        try {
                            B.sendViewSearch(Y, xe)
                        } catch (e) {
                            v.A.error("Einstein sendViewSearch error", {
                                namespace: "ProductList.useEffect",
                                additionalProperties: {
                                    error: e,
                                    searchQuery: Y
                                }
                            })
                        }
                        G.sendViewSearch(pe, xe)
                    } else if (null != e && e.category) {
                        try {
                            B.sendViewCategory(null == e ? void 0 : e.category, xe)
                        } catch (t) {
                            v.A.error("Einstein sendViewCategory error", {
                                namespace: "ProductList.useEffect",
                                additionalProperties: {
                                    error: t,
                                    category: null == e ? void 0 : e.category
                                }
                            })
                        }
                        G.sendViewCategory(pe, null == e ? void 0 : e.category, xe)
                    }
            }
            ), [xe]);
            const Pe = {
                _unusedIsLoading: L,
                staticContext: j,
                productListPropsRest: R,
                isOpenRefinements: D,
                onOpenRefinements: $,
                onCloseRefinements: M,
                refinementsOpenRef: q,
                refinementsCloseRef: W,
                searchParams: pe,
                filtersLoading: H,
                searchQuery: Y,
                isLoading: fe,
                isFetched: Ee,
                isRefetching: be,
                isProductListLoading: he,
                productSearchResult: xe,
                metatags: ke,
                categoryType: oe,
                isSearch: Z,
                category: null == e ? void 0 : e.category,
                categoryLevel: se,
                showNoResults: we,
                total: Ae,
                sortingOptions: _e,
                selectedSortingOptionLabel: Se,
                toggleFilter: Te,
                resetFilters: Oe,
                editoPage: te
            }
              , Ce = Math.ceil(Ae / x.Q$K);
            return f.S$ && void 0 !== Ae && Ae > 0 && J > Ce ? n.createElement(_.A, {
                status: 302,
                to: `${V.pathname}?p=${Ce}`
            }) : n.createElement(I.Provider, {
                value: Pe
            }, t)
        }
        ;
        L.propTypes = {
            productListProps: o().object,
            children: o().node
        };
        const j = () => n.useContext(I)
    }
}]);
//# sourceMappingURL=pages-product-list.js.map