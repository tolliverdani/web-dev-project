import React from "react";

const PaintingGridItem = ( { grid_item = {
    id: "577282bbedc2cb3880f8abf6",
    title: "An Homage to IKB 1957",
    url: "an-homage-to-ikb-1957-2011",
    artistUrl: "takashi-murakami",
    artistName: "Takashi Murakami",
    artistId: "57726db5edc2cb3880b4e400",
    completitionYear: 2011,
    width: 298,
    image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
    height: 418
}} ) => {
    return (
        <div className={"col"}>
            <div className={"card p-1 m-3"}>
                <a href={"/#"}><i className="fas fa-ellipsis-h text-dark float-end me-1"/></a>
                <img className={'img-thumbnail img-responsive border-0'} src={grid_item.image}/>
                <div className={"card-title m-0"}><strong>{grid_item.title}</strong></div>
                <p className={"mb-0"}><strong>{grid_item.artistName}</strong><span className={`${grid_item.completitionYear === null ? 'd-none' : ''}`}>, {grid_item.completitionYear}</span></p>
            </div>
        </div>
    )
}

export default PaintingGridItem;