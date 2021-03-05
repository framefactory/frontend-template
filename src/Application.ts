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
    render()
    {
        return html`Hello, Frontend Template!`;
    }
}
