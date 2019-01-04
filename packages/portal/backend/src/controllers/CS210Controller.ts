import Log from "../../../../common/Log";
import {CourseController} from "./CourseController";
import {IGitHubController} from "./GitHubController";

export class CS210Controller extends CourseController {

    // Does not do anything right now, just here so we know where to make course-specific changes to CourseController

    public constructor(ghController: IGitHubController) {
        super(ghController);
        Log.info("CS210Controller::<init>");
    }

}
