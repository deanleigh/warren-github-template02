import { LitElement as e, html as t } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as i } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";
class a extends i(e) {
  render() {
    return t`
            <uui-box headline="Dashboard with Pie Chart" style="margin:20px;">
                <p>Hi Dean - put your webcomponent inside this markup</p>                
            </uui-box>
            <!-- This is the markup for the test button -->
            <uui-box headline="Test Button" style="margin:20px;">
            <uui-form>
            <uui-button label="xxxx" @click="${this.showAlert}">Click me!</uui-button>
            </uui-form>            
            </uui-box>
            <!-- Divinator - Web Component 0.0.3 -->
            <uui-box headline="Divinator - Web Component 0.0.3" style="margin:20px;">
            <measure-bar></measure-bar>
            </uui-box>
        `;
  }
  // This is the function for the test button
  showAlert() {
    alert("Hello Dean!");
  }
  // This is the function for Divinator - Web Component 0.0.3
  // End Divinator - Web Component 0.0.3
}
export {
  a as DashboardChartElement,
  a as default
};
//# sourceMappingURL=dashboard.chart.element-DBFV442x.js.map
