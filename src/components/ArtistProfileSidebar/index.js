import React from "react";
import ComponentHeader from "../ComponentHeader";

const ArtistInfo = ({
                        art_data = {
                            id: "577282bbedc2cb3880f8abf6",
                            title: "An Homage to IKB 1957",
                            url: "an-homage-to-ikb-1957-2011",
                            artistUrl: "takashi-murakami",
                            artistName: "Takashi Murakami",
                            artistId: "57726db5edc2cb3880b4e400",
                            completitionYear: 2011,
                            width: 298,
                            image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
                            height: 418,
                            genre: "Contemporary",
                            styles: "Street Art",
                            media: "Digital / Mixed Media"
                        }
                    }) => {
    return (
        <>
            {ComponentHeader("Artist Information")}
            <div className={"card bg-light border-0 mt-2 p-2 align-text-center"}>
                <div className={'card-title'}>
                    <div>
                        <p className={"m-0"}><strong>Artist</strong></p>
                        <p className={"m-0"}>{art_data.artistName}</p>
                        <p className={"m-0"}><strong>Genre</strong></p>
                        <p className={"m-0"}>{art_data.genre}</p>
                        <p className={"m-0"}><strong>Style</strong></p>
                        <p className={"m-0"}>{art_data.styles}</p>
                        <p className={"m-0"}><strong>Media</strong></p>
                        <p className={"m-0"}>{art_data.media}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtistInfo;
