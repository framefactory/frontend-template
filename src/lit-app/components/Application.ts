/**
 * Frontend Template
 * Copyright 2024 Ralph Wiedemeier, Frame Factory GmbH
 * 
 * License: MIT
 */

import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Vector3 } from "@ffweb/core/Vector3.js";


@customElement("ff-application")
export default class Application extends LitElement
{
    protected override render()
    {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        return html`<h1>Lit Application</h1><p>${v1.add(v2)}</p>`
    }
}
