/*

In simple terms, lazy loading is a design pattern. It allows you to load parts of your 
application on-demand to reduce the initial load time. For example, you can initially load 
the components and modules related to user login and registration. Then, you can load the 
rest of the components based on user navigation.

You might not feel much difference when using lazy loading for small-scale applications. 
But it significantly impacts large-scale applications by reducing the initial load time.
Ultimately, it improves both the user experience and the application’s performance.

Advantages of Lazy Loading

Reduces initial loading time by reducing the bundle size.
Reduces browser workload.
Improves application performance in low bandwidth situations.
Improves user experience at initial loading.
Optimizes resource usage.

Disadvantages of Lazy Loading

Not suitable for small-scale applications.
Placeholders can slow down quick scrolling.
Requires additional communication with the server to fetch resources.
Can affect SEO and ranking
*/


import React,{ lazy,Suspense }  from 'react'


// withaout lazy loading import
import Hello from './Hello'

// with  lazy loading import
const Morning = lazy(() => import("./Morning"));

function Main_lazy() {
  return (
    <div className='container mt-5'>
        <h1>Hi i am Main Component</h1>
        <hr />
        <Hello/>
        <Suspense fallback={<div class="spinner-border"></div>}>
          <Morning/>
        </Suspense>
        
    </div>
  )
}

export default Main_lazy