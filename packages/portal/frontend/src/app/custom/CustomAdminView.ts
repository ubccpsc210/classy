import Log from "../../../../../common/Log";
import {AdminTabs, AdminView} from "../views/AdminView";

/**
 * CS 210 Admin view doesn't really differ at all from the stock Classy view.
 */
export class ClassyAdminView extends AdminView {
    constructor(remoteUrl: string, tabs: AdminTabs) {
        Log.info("CustomAdminView::<init>(..)");
        super(remoteUrl, tabs);
    }

    public renderPage(name: string, opts: any) {
        Log.info('CustomAdminView::renderPage( ' + name + ', ... ) - start; options: ' + JSON.stringify(opts));
        super.renderPage(name, opts);
    }
}
