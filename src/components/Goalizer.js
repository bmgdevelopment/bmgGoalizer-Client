import React from "react";
import "./Goalizer.css"

export const Goalizer = () => (
    <>
       <h2>Goalizer 🎯</h2>
        <small>The goal organizer!</small>
        <span>
            <div>Coming soon!</div>
        </span>
        
        {/*    <>
        <Route
            render={() => {
                if (sessionStorage.getItem("trendago_user")) {
                    return (
                        <>
                            <UserProvider>
                                <NavBar />
                            </UserProvider>
                            <ApplicationView />
                            <Footer />
                        </>
                    )
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login" component={Login} />

        <RegionProvider>
            <Route path="/register">
                <Register />
            </Route>
        </RegionProvider>

    </> */}
    </>
)