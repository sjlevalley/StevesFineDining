;(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [0],
  {
    12: function (e, t, n) {
      e.exports = {
        button: 'HeaderCartButton_button__3Gq9s',
        icon: 'HeaderCartButton_icon__X4Xzg',
        badge: 'HeaderCartButton_badge__1ogmb',
        bump: 'HeaderCartButton_bump__13ok-'
      }
    },
    15: function (e, t, n) {
      e.exports = {
        meals: 'AvailableMeals_meals__1jTkX',
        'meals-appear': 'AvailableMeals_meals-appear__1-mhm',
        MealsLoading: 'AvailableMeals_MealsLoading__t3tpn',
        MealsError: 'AvailableMeals_MealsError__1uCT0'
      }
    },
    16: function (e, t, n) {
      e.exports = {
        backdrop: 'Modal_backdrop__1Nkdl',
        modal: 'Modal_modal__1RHsD',
        'slide-down': 'Modal_slide-down__3PEmK'
      }
    },
    29: function (e, t, n) {},
    36: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        c,
        r,
        i,
        o,
        s,
        l,
        d,
        u,
        j,
        b = n(10),
        m = n.n(b),
        h = (n(29), n(2)),
        p = n(1),
        O = n.n(p),
        x = n(3),
        f = n(4),
        v = n(0),
        _ = function () {
          return Object(v.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            fill: 'currentColor',
            children: Object(v.jsx)('path', {
              d:
                'M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
            })
          })
        },
        g = O.a.createContext({
          items: [],
          totalAmount: 0,
          addItem: function (e) {},
          removeItem: function (e) {},
          clearCart: function () {}
        }),
        C = n(12),
        y = n.n(C),
        w = function (e) {
          var t = Object(p.useState)(!1),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = Object(p.useContext)(g).items,
            i = r.reduce(function (e, t) {
              return e + t.amount
            }, 0),
            o = ''.concat(y.a.button, ' ').concat(a ? y.a.bump : '')
          return (
            Object(p.useEffect)(
              function () {
                if (0 !== r.length) {
                  c(!0)
                  var e = setTimeout(function () {
                    c(!1)
                  }, 300)
                  return function () {
                    clearTimeout(e)
                  }
                }
              },
              [r]
            ),
            Object(v.jsxs)('button', {
              className: o,
              onClick: e.onClick,
              children: [
                Object(v.jsx)('span', {
                  className: y.a.icon,
                  children: Object(v.jsx)(_, {})
                }),
                Object(v.jsx)('span', { children: 'Your Cart' }),
                Object(v.jsx)('span', { className: y.a.badge, children: i })
              ]
            })
          )
        },
        N = n.p + 'static/media/mealsImage2.484439d1.jpg',
        k = f.a.header(
          a ||
            (a = Object(x.a)([
              '\n  align-items: center;\n  background-color: #8a2b06;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  color: white;\n  display: flex;\n  font-size: 14px;\n  height: fit-content;\n  justify-content: space-between;\n  left: 0;\n  padding: 0 10%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n'
            ]))
        ),
        A = f.a.div(
          c ||
            (c = Object(x.a)([
              '\n  height: 35rem;\n  overflow: hidden;\n  width: 100%;\n  z-index: 0;\n  img {\n    height: 100%;\n    object-fit: cover;\n    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);\n    width: 110%;\n  }\n'
            ]))
        ),
        S = function (e) {
          return Object(v.jsxs)(p.Fragment, {
            children: [
              Object(v.jsxs)(k, {
                children: [
                  Object(v.jsx)('h1', { children: "Steve's Fine Dining" }),
                  Object(v.jsx)(w, { onClick: e.onShowCart })
                ]
              }),
              Object(v.jsx)(A, {
                children: Object(v.jsx)('img', {
                  src: N,
                  alt: 'A table full of delicious food!'
                })
              })
            ]
          })
        },
        E = f.a.section(
          r ||
            (r = Object(x.a)([
              '\nbackground-color: #383838;\nborder-radius: 14px;\nbox-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);\ncolor: white;\nmargin: auto;\nmargin-top: -10rem;\nmax-width: 45rem;\npadding: 1rem;\nposition: relative;\ntext-align: left;\nwidth: 90%;\n  h2 {\n      font-size: 2rem;\n      margin-top: 0;\n    }\n'
            ]))
        ),
        I = function () {
          return Object(v.jsxs)(E, {
            children: [
              Object(v.jsx)('h2', {
                children: 'Delicious Food, Fresh out of the Oven!'
              }),
              Object(v.jsx)('p', {
                children:
                  'Choose your favorite meal from our selection of tasty meals and enjoy a delicious lunch or dinner with friends.'
              }),
              Object(v.jsx)('p', {
                children:
                  'All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!'
              })
            ]
          })
        },
        F = n(9),
        M = n.n(F),
        R = n(14),
        T = f.a.div(
          i ||
            (i = Object(x.a)([
              '\n  background-color: white;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  padding: 1rem;\n'
            ]))
        ),
        z = function (e) {
          return Object(v.jsx)(T, { children: e.children })
        },
        H = n(8),
        D = f.a.div(
          o ||
            (o = Object(x.a)([
              '\n  align-items: center;\n  display: flex;\n  margin-bottom: 0.5rem;\n  label {\n    font-weight: bold;\n    margin-right: 1rem;\n  }\n  input {\n    width: 3rem;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    font: inherit;\n    padding-left: 0.5rem;\n  }\n'
            ]))
        ),
        P = O.a.forwardRef(function (e, t) {
          return Object(v.jsxs)(D, {
            children: [
              Object(v.jsx)('label', {
                htmlFor: e.input.id,
                children: e.label
              }),
              Object(v.jsx)('input', Object(H.a)({ ref: t }, e.input))
            ]
          })
        }),
        B = f.a.form(s || (s = Object(x.a)(['\n  text-align: right;\n']))),
        Y = f.a.button(
          l ||
            (l = Object(x.a)([
              '\n  background-color: #8a2b06;\n  border: 1px solid #8a2b06;\n  border-radius: 20px;\n  color: white;\n  cursor: pointer;\n  font: inherit;\n  font-weight: bold;\n  padding: 0.25rem 2rem;\n  :active,\n  :hover {\n    background-color: #641e03;\n    border-color: #641e03;\n  }\n'
            ]))
        ),
        X = function (e) {
          var t = Object(p.useState)(!0),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = Object(p.useRef)()
          return Object(v.jsxs)(B, {
            onSubmit: function (t) {
              t.preventDefault()
              var n = r.current.value,
                a = +n
              0 === n.trim().length || a < 1 || a > 5 ? c(!1) : e.onAddToCart(a)
            },
            children: [
              Object(v.jsx)(P, {
                ref: r,
                label: 'Amount',
                input: {
                  id: 'amount',
                  type: 'number',
                  min: '1',
                  max: '5',
                  step: '1',
                  defaultValue: '1'
                }
              }),
              Object(v.jsx)(Y, { children: '+ Add' }),
              !a &&
                Object(v.jsx)('p', {
                  children: 'Please enter a valid amount (1-5).'
                })
            ]
          })
        },
        L = f.a.li(
          d ||
            (d = Object(x.a)([
              '\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem;\n  padding-bottom: 1rem;\n  h3 {\n    margin: 0 0 0.25rem 0;\n  }\n'
            ]))
        ),
        G = f.a.div(u || (u = Object(x.a)(['\n  font-style: italic;\n']))),
        J = f.a.div(
          j ||
            (j = Object(x.a)([
              '\n  color: #ad5502;\n  font-size: 1.25rem;\n  font-weight: bold;\n  margin-top: 0.25rem;\n'
            ]))
        ),
        K = function (e) {
          var t = Object(p.useContext)(g),
            n = '$'.concat(e.price.toFixed(2))
          return Object(v.jsxs)(L, {
            children: [
              Object(v.jsxs)('div', {
                children: [
                  Object(v.jsx)('h3', { children: e.name }),
                  Object(v.jsx)(G, { children: e.description }),
                  Object(v.jsx)(J, { children: n })
                ]
              }),
              Object(v.jsx)('div', {
                children: Object(v.jsx)(X, {
                  onAddToCart: function (n) {
                    t.addItem({
                      id: e.id,
                      name: e.name,
                      amount: n,
                      price: e.price
                    })
                  }
                })
              })
            ]
          })
        },
        V = n(15),
        $ = n.n(V),
        q = function () {
          var e = Object(p.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            a = t[1],
            c = Object(p.useState)(!0),
            r = Object(h.a)(c, 2),
            i = r[0],
            o = r[1],
            s = Object(p.useState)(),
            l = Object(h.a)(s, 2),
            d = l[0],
            u = l[1]
          if (
            (Object(p.useEffect)(function () {
              var e = (function () {
                var e = Object(R.a)(
                  M.a.mark(function e () {
                    var t, n, c, r
                    return M.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                'https://steves-fine-dining-default-rtdb.firebaseio.com/meals.json'
                              )
                            )
                          case 2:
                            if ((t = e.sent).ok) {
                              e.next = 5
                              break
                            }
                            throw new Error('Something went wrong!')
                          case 5:
                            return (e.next = 7), t.json()
                          case 7:
                            for (r in ((n = e.sent), (c = []), n))
                              c.push({
                                id: r,
                                name: n[r].name,
                                description: n[r].description,
                                price: n[r].price
                              })
                            a(c), o(!1)
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()
              e().catch(function (e) {
                o(!1), u(e.message)
              })
            }, []),
            i)
          )
            return Object(v.jsx)('section', {
              className: $.a.MealsLoading,
              children: Object(v.jsx)('p', {
                children: 'Retrieving available meals...'
              })
            })
          if (d)
            return Object(v.jsx)('section', {
              className: $.a.MealsError,
              children: Object(v.jsx)('p', { children: d })
            })
          var j = n.map(function (e) {
            return Object(v.jsx)(
              K,
              {
                id: e.id,
                name: e.name,
                description: e.description,
                price: e.price
              },
              e.id
            )
          })
          return Object(v.jsx)('section', {
            className: $.a.meals,
            children: Object(v.jsx)(z, {
              children: Object(v.jsx)('ul', { children: j })
            })
          })
        },
        U = function () {
          return Object(v.jsxs)(p.Fragment, {
            children: [Object(v.jsx)(I, {}), Object(v.jsx)(q, {})]
          })
        },
        W = n(7),
        Z = n.n(W),
        Q = function (e) {
          var t = Object(p.useState)(!1),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = '$'.concat(e.price.toFixed(2)),
            i = Object(p.useContext)(g).items
          Object(p.useEffect)(
            function () {
              if (0 !== i.length) {
                c(!0)
                var e = setTimeout(function () {
                  c(!1)
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [i]
          )
          var o = ''.concat(Z.a.button, ' ').concat(a ? Z.a.bump : '')
          return Object(v.jsxs)('li', {
            className: Z.a['cart-item'],
            children: [
              Object(v.jsxs)('div', {
                children: [
                  Object(v.jsx)('h2', { children: e.name }),
                  Object(v.jsxs)('div', {
                    className: Z.a.summary,
                    children: [
                      Object(v.jsx)('span', {
                        className: Z.a.price,
                        children: r
                      }),
                      Object(v.jsxs)('span', {
                        className: Z.a.amount,
                        children: ['x ', e.amount]
                      })
                    ]
                  })
                ]
              }),
              Object(v.jsxs)('div', {
                className: Z.a.actions,
                children: [
                  Object(v.jsx)('button', {
                    className: o,
                    onClick: e.onRemove,
                    children: '\u2212'
                  }),
                  Object(v.jsx)('button', {
                    className: o,
                    onClick: e.onAdd,
                    children: '+'
                  })
                ]
              })
            ]
          })
        },
        ee = n(5),
        te = n.n(ee),
        ne = function (e) {
          return '' === e.trim()
        },
        ae = function (e) {
          var t = Object(p.useState)({
              name: !0,
              street: !0,
              city: !0,
              postalCode: !0
            }),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = Object(p.useRef)(),
            i = Object(p.useRef)(),
            o = Object(p.useRef)(),
            s = Object(p.useRef)(),
            l = ''.concat(te.a.control, ' ').concat(a.name ? '' : te.a.invalid),
            d = ''
              .concat(te.a.control, ' ')
              .concat(a.street ? '' : te.a.invalid),
            u = ''
              .concat(te.a.control, ' ')
              .concat(a.postalCode ? '' : te.a.invalid),
            j = ''.concat(te.a.control, ' ').concat(a.city ? '' : te.a.invalid)
          return Object(v.jsxs)('form', {
            className: te.a.form,
            onSubmit: function (t) {
              t.preventDefault()
              var n = r.current.value,
                a = i.current.value,
                l = o.current.value,
                d = s.current.value,
                u = !ne(n),
                j = !ne(a),
                b = !ne(d),
                m = 5 === l.trim().length
              c({ name: u, street: j, city: b, postalCode: m }),
                u &&
                  j &&
                  b &&
                  m &&
                  e.onConfirm({ name: n, street: a, city: d, postalCode: l })
            },
            children: [
              Object(v.jsxs)('div', {
                className: l,
                children: [
                  Object(v.jsx)('label', {
                    htmlFor: 'name',
                    children: 'Your Name'
                  }),
                  Object(v.jsx)('input', {
                    type: 'text',
                    id: 'name',
                    placeholder: 'Enter name here...',
                    ref: r
                  }),
                  !a.name &&
                    Object(v.jsx)('p', {
                      children: 'Please enter a valid name!'
                    })
                ]
              }),
              Object(v.jsxs)('div', {
                className: d,
                children: [
                  Object(v.jsx)('label', {
                    htmlFor: 'street',
                    children: 'Street'
                  }),
                  Object(v.jsx)('input', {
                    type: 'text',
                    id: 'street',
                    placeholder: 'Enter address...',
                    ref: i
                  }),
                  !a.street &&
                    Object(v.jsx)('p', {
                      children: 'Please enter a valid street!'
                    })
                ]
              }),
              Object(v.jsxs)('div', {
                className: u,
                children: [
                  Object(v.jsx)('label', {
                    htmlFor: 'postal',
                    children: 'Postal Code'
                  }),
                  Object(v.jsx)('input', {
                    type: 'text',
                    id: 'postal',
                    placeholder: 'Enter zip...',
                    ref: o
                  }),
                  !a.postalCode &&
                    Object(v.jsx)('p', {
                      children: 'Postal Code must be 5 numbers long!'
                    })
                ]
              }),
              Object(v.jsxs)('div', {
                className: j,
                children: [
                  Object(v.jsx)('label', { htmlFor: 'city', children: 'City' }),
                  Object(v.jsx)('input', {
                    type: 'text',
                    id: 'city',
                    placeholder: 'Enter city...',
                    ref: s
                  }),
                  !a.city &&
                    Object(v.jsx)('p', {
                      children: 'Please enter a valid city!'
                    })
                ]
              }),
              Object(v.jsxs)('div', {
                className: te.a.actions,
                children: [
                  Object(v.jsx)('button', {
                    type: 'button',
                    onClick: e.onCancel,
                    children: 'Cancel'
                  }),
                  Object(v.jsx)('button', {
                    className: te.a.submit,
                    children: 'Confirm'
                  })
                ]
              })
            ]
          })
        },
        ce = n(6),
        re = n.n(ce),
        ie = n(16),
        oe = n.n(ie),
        se = function (e) {
          return Object(v.jsx)('div', {
            className: oe.a.backdrop,
            onClick: e.onClose
          })
        },
        le = function (e) {
          return Object(v.jsx)('div', {
            className: oe.a.modal,
            children: Object(v.jsx)('div', {
              className: oe.a.content,
              children: e.children
            })
          })
        },
        de = document.getElementById('overlays'),
        ue = function (e) {
          return Object(v.jsxs)(p.Fragment, {
            children: [
              m.a.createPortal(Object(v.jsx)(se, { onClose: e.onClose }), de),
              m.a.createPortal(Object(v.jsx)(le, { children: e.children }), de)
            ]
          })
        },
        je = function (e) {
          var t = Object(p.useState)(!1),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = Object(p.useState)(!1),
            i = Object(h.a)(r, 2),
            o = i[0],
            s = i[1],
            l = Object(p.useState)(!1),
            d = Object(h.a)(l, 2),
            u = d[0],
            j = d[1],
            b = Object(p.useState)(!1),
            m = Object(h.a)(b, 2),
            x = m[0],
            f = m[1],
            _ = Object(p.useContext)(g),
            C = _.items.length > 0,
            y = '$'.concat(_.totalAmount.toFixed(2)),
            w = _.items
          Object(p.useEffect)(
            function () {
              if (0 !== w.length) {
                c(!0)
                var e = setTimeout(function () {
                  c(!1)
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [w]
          )
          var N = function (e) {
              _.removeItem(e)
            },
            k = function (e) {
              _.addItem(e)
            },
            A = ''.concat(a ? re.a.bump : ''),
            S = (function () {
              var e = Object(R.a)(
                M.a.mark(function e (t) {
                  return M.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            f(!0),
                            (e.next = 3),
                            fetch(
                              'https://steves-fine-dining-default-rtdb.firebaseio.com/orders.json',
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  user: t,
                                  orderedItems: _.items
                                })
                              }
                            )
                          )
                        case 3:
                          f(!1), s(!0), _.clearCart()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            E = Object(v.jsx)('ul', {
              className: re.a['cart-items'],
              children: _.items.map(function (e) {
                return Object(v.jsx)(
                  Q,
                  {
                    name: e.name,
                    amount: e.amount,
                    price: e.price,
                    onRemove: N.bind(null, e.id),
                    onAdd: k.bind(null, e)
                  },
                  e.id
                )
              })
            }),
            I = Object(v.jsxs)('div', {
              className: re.a.actions,
              children: [
                Object(v.jsx)('button', {
                  className: re.a['button--alt'],
                  onClick: e.onClose,
                  children: 'Close'
                }),
                C &&
                  Object(v.jsx)('button', {
                    className: re.a.button,
                    onClick: function () {
                      j(!0)
                    },
                    children: 'Order'
                  })
              ]
            }),
            F = Object(v.jsxs)(O.a.Fragment, {
              children: [
                E,
                Object(v.jsxs)('div', {
                  className: re.a.total,
                  children: [
                    Object(v.jsx)('span', { children: 'Total Amount' }),
                    Object(v.jsx)('span', { className: A, children: y })
                  ]
                }),
                u && Object(v.jsx)(ae, { onConfirm: S, onCancel: e.onClose }),
                !u && I
              ]
            }),
            T = Object(v.jsx)('p', { children: 'Sending order data...' }),
            z = Object(v.jsxs)(O.a.Fragment, {
              children: [
                Object(v.jsx)('p', {
                  children: 'Success! Your order has been sent...'
                }),
                Object(v.jsx)('div', {
                  className: re.a.actions,
                  children: Object(v.jsx)('button', {
                    className: re.a.button,
                    onClick: e.onClose,
                    children: 'Close'
                  })
                })
              ]
            })
          return Object(v.jsxs)(ue, {
            onClose: e.onClose,
            children: [!x && !o && F, x && T, !x && o && z]
          })
        },
        be = n(20),
        me = { items: [], totalAmount: 0 },
        he = function (e, t) {
          if ('ADD' === t.type) {
            var n,
              a = e.totalAmount + t.payload.price * t.payload.amount,
              c = e.items.findIndex(function (e) {
                return e.id === t.payload.id
              }),
              r = e.items[c]
            if (r) {
              var i = Object(H.a)(
                Object(H.a)({}, r),
                {},
                { amount: r.amount + t.payload.amount }
              )
              ;(n = Object(be.a)(e.items))[c] = i
            } else n = e.items.concat(t.payload)
            return { items: n, totalAmount: a }
          }
          if ('REMOVE' === t.type) {
            var o,
              s = e.items.findIndex(function (e) {
                return e.id === t.id
              }),
              l = e.items[s],
              d = e.totalAmount - l.price
            if (1 === l.amount)
              o = e.items.filter(function (e) {
                return e.id !== t.id
              })
            else {
              var u = Object(H.a)(
                Object(H.a)({}, l),
                {},
                { amount: l.amount - 1 }
              )
              ;(o = Object(be.a)(e.items))[s] = u
            }
            return { items: o, totalAmount: d }
          }
          return t.type, me
        },
        pe = function (e) {
          var t = Object(p.useReducer)(he, me),
            n = Object(h.a)(t, 2),
            a = n[0],
            c = n[1],
            r = {
              items: a.items,
              totalAmount: a.totalAmount,
              addItem: function (e) {
                c({ type: 'ADD', payload: e })
              },
              removeItem: function (e) {
                c({ type: 'REMOVE', id: e })
              },
              clearCart: function () {
                c({ type: 'CLEAR' })
              }
            }
          return Object(v.jsx)(g.Provider, { value: r, children: e.children })
        }
      var Oe = function () {
        var e = Object(p.useState)(!1),
          t = Object(h.a)(e, 2),
          n = t[0],
          a = t[1]
        return Object(v.jsxs)(pe, {
          children: [
            n &&
              Object(v.jsx)(je, {
                onClose: function () {
                  a(!1)
                }
              }),
            Object(v.jsx)(S, {
              onShowCart: function () {
                a(!0)
              }
            }),
            Object(v.jsx)('main', { children: Object(v.jsx)(U, {}) })
          ]
        })
      }
      m.a.render(Object(v.jsx)(Oe, {}), document.getElementById('root'))
    },
    5: function (e, t, n) {
      e.exports = {
        form: 'Checkout_form__3YUzK',
        control: 'Checkout_control__2E5mE',
        actions: 'Checkout_actions__1Rcig',
        submit: 'Checkout_submit__RoFS5',
        invalid: 'Checkout_invalid__2CRY0'
      }
    },
    6: function (e, t, n) {
      e.exports = {
        'cart-items': 'Cart_cart-items__sEF_7',
        total: 'Cart_total__36wXg',
        actions: 'Cart_actions__1Spx1',
        'button--alt': 'Cart_button--alt__vHGr6',
        button: 'Cart_button__t7TDB',
        bump: 'Cart_bump__1GHmL'
      }
    },
    7: function (e, t, n) {
      e.exports = {
        'cart-item': 'CartItem_cart-item__1X5mW',
        summary: 'CartItem_summary__1EYsw',
        price: 'CartItem_price__1ui5U',
        amount: 'CartItem_amount__yurzs',
        actions: 'CartItem_actions__1S8pm',
        bump: 'CartItem_bump__1KlDu'
      }
    }
  },
  [[36, 1, 2]]
])
//# sourceMappingURL=main.cdb3bc8d.chunk.js.map
