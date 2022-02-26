import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/github/githubContext';
import { useParams } from 'react-router-dom';
import { FaCode, FaUserFriends, FaStore, FaUsers } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Loading from '../components/layout/Loading';

function User() {
  const { getUser, user, loading } = useGlobalContext();

  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    bio,
    avatar_url,
    company,
    blog,
    location,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 ">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            <IoIosArrowRoundBack size="30" />
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg card shadow-lg image-full">
              <figure>
                <img className="rounded-lg" src={avatar_url} alt="name" />
              </figure>
              <div className="card-body justify-end ">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-5">
              <h1 className="text-3xl card-title">
                {name}
                <div className="mr-1 ml-2 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-primary"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full mt-5 rounded-lg shadow-lg bg-base-300 stats">
              {location && (
                <div className="stat ">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat ">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat ">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-300 stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 ">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 ">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 ">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5 ">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
