import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";
import PaintingListings from "../../components/PaintingListings";

import paintingsReducer from "../../reducers/paintings-reducer"
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import PaintingGridRandom from "../../components/PaintingGridRandom";

const reducers = combineReducers({paintings: paintingsReducer})
const store = createStore(reducers);

const Index = () => {
    return (
        <Provider store={store}>
            <div>
                <NavigationTopMenu/>
                <div className={"container"}>
                    <div className={'row pt-2'}>
                        <div className={'col-2'}>
                            <NavigationSidebar/>
                        </div>
                        <div className={'col-10 col-lg-7'}>
                            <PaintingGridRandom/>
                        </div>
                        <div className={'col-3 d-none d-lg-block'}>
                            <PaintingListings/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default Index;