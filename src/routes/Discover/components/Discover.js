import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { Api } from "../../../services/api";

export default function Discover() {

  const {data: newReleases } = Api.useGetNewReleasesQuery()
  const {data: featuredPlaylists} = Api.useGetFeaturedPlaylistsQuery()
  const {data: categories} = Api.useGetCategoriesQuery()

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases?.albums.items ?? []} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={featuredPlaylists?.playlists.items ?? []} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories?.categories.items ?? []} imagesKey="icons" />
    </div>
  );
}
