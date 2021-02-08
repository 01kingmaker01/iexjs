/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

// for babel
import "regenerator-runtime/runtime.js";

import pkg_json from "../../package.json";
export const VERSION = pkg_json.version;


export * from "./common";
export * from "./account";
export * from "./alternative";


export * from "./client";
