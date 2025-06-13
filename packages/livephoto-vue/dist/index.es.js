import { defineComponent as E, ref as t, watch as I, onMounted as z, createElementBlock as R, openBlock as L, Fragment as M, createElementVNode as p, normalizeStyle as f, nextTick as T } from "vue";
import * as F from "livephotoskit";
const K = ["src"], O = ["src", "muted", "loop"], j = /* @__PURE__ */ E({
  __name: "LivePhoto",
  props: {
    photoSrc: { default: "" },
    videoSrc: { default: "" },
    muted: { type: Boolean, default: !1 },
    loop: { type: Boolean, default: !1 },
    useApple: { type: Boolean, default: !1 }
  },
  setup(s) {
    const a = s, u = t(!1), n = t(!1), v = t(!1), A = t(!1), l = t(""), i = t(""), m = t(!1), g = t(!1), r = t(!1), c = t(null), d = t(null), U = async () => {
      if (r.value && d.value && l.value && i.value) {
        await T();
        const e = F.Player(d.value);
        e.photoSrc = l.value, e.videoSrc = i.value;
      }
    }, V = (e) => {
      e.stopPropagation(), c.value && (v.value ? c.value.pause() : (n.value = !0, c.value.play()));
    }, _ = (e) => {
      var o;
      (o = window.top) == null || o.postMessage(e, window.location.origin);
    }, b = (e) => {
      const o = e.target;
      !/trigger/.test(o.className) && !n.value && _(l.value);
    }, B = () => {
      u.value = !0, /iphone/i.test(navigator.userAgent) && /micromessenger/i.test(navigator.userAgent) && setTimeout(() => {
        y(!0);
      }, 500);
    }, y = (e) => {
      A.value = e;
    }, h = (e) => {
      v.value = e;
    }, N = (e) => {
      n.value = e;
    }, C = () => {
      const e = new URLSearchParams(window.location.search), o = e.get("picUrl") || e.get("photoSrc"), P = e.get("videoUrl") || e.get("videoSrc"), S = e.get("muted"), k = e.get("loop"), w = e.get("useApple");
      o && (l.value = o), P && (i.value = P), S && (m.value = !!S), k && (g.value = !!k), w && (r.value = !!w), !o && a.photoSrc && (l.value = a.photoSrc), !P && a.videoSrc && (i.value = a.videoSrc), S || (m.value = a.muted), k || (g.value = a.loop), w || (r.value = a.useApple);
    };
    return I([r, l, i, d], () => {
      r.value && U();
    }, { immediate: !0 }), z(() => {
      C();
    }), (e, o) => (L(), R("div", {
      class: "live-photo",
      onClick: b
    }, [
      r.value ? (L(), R("div", {
        key: 0,
        ref_key: "applePlayerRef",
        ref: d,
        class: "live-img"
      }, null, 512)) : (L(), R(M, { key: 1 }, [
        p("div", {
          class: "live-trigger",
          onClick: V,
          style: f({ opacity: Number(A.value) })
        }, [
          p("div", {
            class: "trigger-icon",
            style: f({
              animationPlayState: v.value ? "running" : "paused"
            })
          }, null, 4),
          o[5] || (o[5] = p("span", { class: "trigger-text" }, "LIVE", -1))
        ], 4),
        p("img", {
          class: "live-img",
          src: l.value,
          onLoad: B,
          style: f({ opacity: Number(u.value) })
        }, null, 44, K),
        p("video", {
          ref_key: "videoRef",
          ref: c,
          class: "live-video",
          src: i.value,
          style: f({ opacity: Number(n.value) }),
          muted: m.value,
          loop: g.value,
          playsinline: "",
          "webkit-playsinline": "",
          onCanplay: o[0] || (o[0] = () => y(!0)),
          onLoadedmetadata: o[1] || (o[1] = () => y(!0)),
          onPlaying: o[2] || (o[2] = () => h(!0)),
          onPause: o[3] || (o[3] = () => h(!1)),
          onEnded: o[4] || (o[4] = () => N(!1))
        }, null, 44, O)
      ], 64))
    ]));
  }
}), q = (s, a) => {
  const u = s.__vccOpts || s;
  for (const [n, v] of a)
    u[n] = v;
  return u;
}, x = /* @__PURE__ */ q(j, [["__scopeId", "data-v-67f2bfe9"]]), D = (s) => {
  s.component("LivePhoto", x);
}, H = {
  install: D,
  LivePhoto: x
};
export {
  x as LivePhoto,
  H as default,
  D as install
};
