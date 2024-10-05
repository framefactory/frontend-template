/**
 * Frontend Template
 * Copyright 2024 Ralph Wiedemeier, Frame Factory GmbH
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

export class Application extends React.Component<IApplicationProps, IApplicationState>
{
    override render()
    {
        return (
            <h1>React Application</h1>
        );
    }
}