/**
 * Frontend Template
 * Copyright 2022 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import * as React from "react";

////////////////////////////////////////////////////////////////////////////////

export interface IApplicationProps
{
}

export interface IApplicationState
{
}

export default class Application extends React.Component<IApplicationProps, IApplicationState>
{
    render()
    {
        return (
            <h1>React Application</h1>
        );
    }
}