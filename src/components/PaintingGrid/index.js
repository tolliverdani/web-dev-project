import React from "react";

import paintings from "./paintinginfo.json";
import PaintingGridItem from "../PaintingGridItem";

const PaintingGrid = () => {
    return (
        <>
            {/*TODO should probably keep this grid component independent of the heading?*/}
            <h5><strong>Art Feed</strong></h5>
            <div className={'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-1'}>
                {paintings.map(painting_item =>
                    <PaintingGridItem grid_item={painting_item}/>
                )}
            </div>
        </>
    )
}

export default PaintingGrid;