import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';

const Profile = ({
    profile: { profile, loading },
    auth,
    match,
    getProfileById,
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    if (profile === null || loading) return <Spinner />;

    return (
        <>
            <Link to="/profiles" className="btn btn-light">
                Back to Profiles
        </Link>
            {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                    <Link to="/edit-profile" className="btn btn-dark">
                        Edit Profile
            </Link>
                )}
            <div className="profile-grid my-1">
                <ProfileTop profile={profile} />
            </div>
        </>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
