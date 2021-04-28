/**
 * Frontend Template
 * Copyright 2021 Ralph Wiedemeier, Frame Factory GmbH
 * 
 * License: MIT
 */

import CustomElement, { customElement, html } from "@ff/ui/CustomElement";

////////////////////////////////////////////////////////////////////////////////

@customElement("ff-application")
export default class Application extends CustomElement
{
    protected render()
    {
        return html`
            <h1>Frontend Template</h1>
            <p>Hello, World!</p>
        `;
    }
}
