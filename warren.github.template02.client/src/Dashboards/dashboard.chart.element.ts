import { LitElement, css, html, customElement} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";

@customElement('dashboard-chart')
export class DashboardChartElement extends UmbElementMixin(LitElement) {

    render() {
        return html`
            <uui-box headline="Dashboard with Pie Chart" style="margin:20px;">
                <p>Hi Dean - put your webcomponent inside this markup</p>                
            </uui-box>
        `;
    }
}

export default DashboardChartElement;

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-chart': DashboardChartElement;
  }
}