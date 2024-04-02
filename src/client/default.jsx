import React from 'react'

function Default (html) {
    return (
        <html>
            <head>
                <title>Get-a-Ways</title>
                <link rel="stylesheet" href="/src/client/index.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/getinspired">Get Inspired</a>
                        </li>
                        <li>
                            <a href="/itinerary/new">Create Itinerary</a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default