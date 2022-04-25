import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {useProfile} from "../../_context/profile-context";
import {findUserCollection} from "../../_actions/collections-actions";
import {findActiveListingsByOwnerId} from "../../_actions/listings-actions";
import {findActiveOffersBySellerId} from "../../_actions/offers-actions";
import SecureContent from "../../_security/secure-content";

import Offers from "../../components/Offers";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import UserProfile from "../../components/UserProfile";
import NavigationSidebar from "../../components/NavigationSidebar";
import ListingsGrid from "../../components/ListingsGrid";
import UserGrid from "../../components/UserGrid";
import Collection from "../../components/UserProfile/Collection";
import friends from "../../components/UserGrid/currentowners.json"
import {findUserById} from "../../_actions/users-actions";

const UserProfileScreen = () => {

    const {profileId} = useParams()
    const dispatch = useDispatch();

    console.log("this is the params: " + profileId)

    const user_profile = useSelector(state => state.profile)
    useEffect(() => findUserById(dispatch, profileId), [dispatch, profileId]);

    const paintings = useSelector(state => state.collection);
    useEffect(() => findUserCollection(dispatch, profileId), [dispatch, profileId]);

    const listings = useSelector(state => state.listings);
    useEffect(() => findActiveListingsByOwnerId(dispatch, profileId), [dispatch, profileId])

    const offers = useSelector(state => state.offers);
    useEffect(() => findActiveOffersBySellerId(dispatch, profileId), [dispatch, profileId])

    return (
        <div className={"container"}>
            <NavigationTopMenu/>
            <div className={"row m-3 p-2"}>
                <div className={'col-2'}>
                    <NavigationSidebar
                        active={useLocation().pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
                </div>
                <div className={'col-10 col-lg-8'}>
                    <SecureContent>
                        <ListingsGrid type={"user"} data={listings}/>
                    </SecureContent>
                    <Collection paintings={paintings}/>
                </div>
                <div className={'d-none d-lg-block col-2'}>
                    {console.log("About to pass this to the user profile component: " + user_profile)}
                    <UserProfile profile={user_profile}/>
                    <SecureContent>
                        <Offers data={offers}/>
                    </SecureContent>
                    <UserGrid users={friends} header={"Connections"}/>
                </div>
            </div>
        </div>
    )
        ;
};
export default UserProfileScreen;