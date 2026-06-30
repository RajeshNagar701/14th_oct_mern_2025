
/*

https://tailwindcss.com/docs/guides/create-react-app

1)Install Tailwind CSS

step :1 cdn : <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

step :2 npm install tailwindcss @tailwindcss/cli

src/input.css
@import "tailwindcss";

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

Load in index.html head section : <link href="./output.css" rel="stylesheet">

*/

import React from 'react'

function Tailwind_instalation() {
    return (
        <div>
            <h1 className="text-shadow-lg text-5xl text-lime-600 bg-red-500 text-center">
                Hello world!
            </h1>
        </div>
    )
}

export default Tailwind_instalation