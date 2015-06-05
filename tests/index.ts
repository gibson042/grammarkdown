/*!
 *  Copyright 2015 Ron Buckton (rbuckton@chronicles.org)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { install } from "source-map-support";
install();

import "./core-tests";
import "./tokens-tests";
import "./diagnostics-tests";
import "./nodes-tests";
import "./scanner-tests";
import "./parser-tests";
import "./binder-tests";
import "./checker-tests";
import "./emitter-tests";
import "./markdown-tests";
import "./ecmarkup-tests";