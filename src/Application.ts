/**
 * Frontend Template
 *
 * @author Ralph Wiedemeier <ralph@framefactory.ch>
 * @copyright (c) 2020 Frame Factory GmbH
 * @license MIT
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
