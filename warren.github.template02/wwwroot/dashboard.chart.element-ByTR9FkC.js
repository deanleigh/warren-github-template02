import { LitElement as m, html as p, customElement as l } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as h } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";
var u = Object.defineProperty, b = Object.getOwnPropertyDescriptor, d = (i, r, a, t) => {
  for (var e = t > 1 ? void 0 : t ? b(r, a) : r, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (e = (t ? n(r, a, e) : n(e)) || e);
  return t && e && u(r, a, e), e;
};
let s = class extends h(m) {
  render() {
    return p`
            <uui-box headline="Dashboard with Pie Chart" style="margin:20px;">
                <p>Hi Dean - put your webcomponent inside this markup</p>                
            </uui-box>
        `;
  }
};
s = d([
  l("dashboard-chart")
], s);
const x = s;
export {
  s as DashboardChartElement,
  x as default
};
//# sourceMappingURL=dashboard.chart.element-ByTR9FkC.js.map
