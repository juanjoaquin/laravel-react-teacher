import React from "react";
import BannerHomePage from "./BannerHomePage/BannerHomePage";
import SecondBanner from "./SecondBanner/SecondBanner";
import Redirections from "./Redirections/Redirections";
import NavBar from "./NavBar/NavBar";






const HomePage = () => {
    return (
        <div>
                {/* <NavBar /> */}
            <BannerHomePage />
            <SecondBanner />
            <Redirections />
        </div>
    );
};

export default HomePage;