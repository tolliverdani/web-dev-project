import {useEffect, useState} from "react";
import {findAllUsers} from "../_actions/users-actions";
import {useDispatch, useSelector} from "react-redux";

const SecureClaimedArtistButton = ({children, artist_id, users}) => {
    const [currentUser, setCurrentUser] = useState(true)
    let artist_claimed = false;

    if (users !== undefined) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].is_artist && users[i].artist_id === artist_id) {
                artist_claimed = true;
                break;
            }
        }
    }
    const check = () => {
        if ( artist_claimed ){
            setCurrentUser(false)
        }

    }

    useEffect(() => {
        check()
    }, [])

    if (currentUser) {
        return children
    }
    return null
}

export default SecureClaimedArtistButton