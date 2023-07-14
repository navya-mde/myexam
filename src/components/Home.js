import React from 'react'

const Home = () => {
  return (
    <>
    <h1>Welcome to our Website</h1>
    <div class="container">
        <div className="row">
            <div class="col">
                <div class="card border bg-dark">
                    <div class="card-header bg-secondary pb-4 mt-1 mb-1 me-1 ms-1 text-center text-white">
                        <img src="https://th.bing.com/th?id=OIP.sFaiGsdJQmu9rdwbjG7YhAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                                alt=""
                                width="100%"
                                  >
                        </img>
                    </div>
                    <div class="card-body bg-info mb-1 me-1 ms-1">
                        <p>Our is an outstanding, clean and modern food website template for building an impactful 
                            eCommerce page. Not only do you have the design predefined, but Ogani also comes with plenty 
                            of features and functions for saving yourself additional time and effort. For instance, along
                             with selling goods, you can even start a compelling and educational blog that will further promote healthy 
                             living. You came to the right place if that is on your to-do list, as Ogani will be of tremendous help.
                            Moreover, Ogani ensures a mobile-ready and cross-browser compatible layout
                            and is lightweight for exceptional performance. A few other amenities of this beautiful 
                            site canvas include a top bar, carousels, different internal eCommerce pages, and a contact section. Indeed, the latter contains Google Maps and contact form.</p>
                    </div>
                    <div class="card-footer bg-secondary pb-4 mb-1 me-1 ms-1 text-center text-white">
                    <p>Founded in 2009, Menufy offers mobile and online meal ordering capabilities to
                         restaurants in thousands of cities in the US.
                     Menufy provides digital menus on websites and in its app, from which customers
                        can securely pay with the most options available out of all restaurant e-commerce systems.
                    </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;