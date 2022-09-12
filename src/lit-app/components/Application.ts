/**
 * Frontend Template
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 * 
 * License: MIT
 */

import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import Vector3 from "@ff/core/Vector3";


@customElement("ff-application")
export default class Application extends LitElement
{
    render()
    {
        const v1 = new Vector3(1, 2, 3);
        const v2 = new Vector3(4, 5, 6);
        return html`<h1>Lit Application</h1><p>${v1.add(v2)}</p>`
    }
}
