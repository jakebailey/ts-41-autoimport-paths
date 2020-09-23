/**
 * In the below, try and auto-import "printHello" and "Logger".
 *
 * "printHello" works correctly, importing absolutely via the path.
 *
 * "Logger" gets auto-imported as "src/common/logging" even though baseUrl
 * is unset. Accepting the completion leaves an import that can't be resolved.
 *
 * In ".vscode/settings.json", setting the suggestion behavior to "non-relative"
 * still suggests "src/common/logging", even though there is no way to absolutely
 * import "logging" absoutely.
 *
 * Setting the suggestion behavior to "relative" offers a correct suggestion for "Logger",
 * but completely ignores paths and makes test-package-2's suggestion relative, i.e.:
 * "../../../test-package-2/src/common/someUtil"
 */

// Make sure tsserver knows about printHello but not its import path by referencing it
// transitively through another import.
import { printHelloTwice } from "test-package-2/common/someOtherUtil";

export function doSomething() {
    printHelloTwice();

    printHello;

    Logger;
}
