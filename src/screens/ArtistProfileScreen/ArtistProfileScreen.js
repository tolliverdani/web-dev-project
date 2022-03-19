import React from "react";

import NavigationTopMenu from "../../components/NavigationTopMenu";
import PaintingListings from "../../components/PaintingListings";
import ArtistProfileSidebar from "../../components/ArtistProfileSidebar";
import PriceHistory from "../../components/PriceHistory";
import CurrentOwners from "../../components/CurrentOwners";
import PaintingGrid from "../../components/PaintingGrid";

const ArtistProfileScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={"container"}>
                <div className={'row pt-2'}>
                    <div className={'col-2'}>
                        <ArtistProfileSidebar/>
                    </div>
                    <div className={'col-10 col-lg-8'}>
                        <PaintingGrid/>
                    </div>
                    <div className={'col-2 d-none d-lg-block '}>
                        <PaintingListings/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ArtistProfileScreen;