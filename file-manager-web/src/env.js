export const applicationName = 'ECM Explore';

export const authTokenCookieName = 'explore_auth_token';

/** Routes **/
export const signInRoute = '/signIn';
export const homeRoute = '/';
export const uploadRoute = '/upload';
export const metadataRoute = '/metadata';
export const createMetadataRoute = '/createMetadata';
export const updateMetadataRoute = '/updateMetadata/:id';

/** Rest Services Endpoints**/
export const authUrl =  'http://localhost:3000/explore/v1/auth';
export const uploadBinaryUrl =  'http://localhost:3000/explore/v1/artifacts/upload';
export const downloadUrl =  'http://localhost:3000/explore/v1/artifact/download/:id';
export const getMetadataUrl = 'http://localhost:3000/explore/v1/artifact/metadata/:id';
export const getAllMetadataUrl = 'http://localhost:3000/explore/v1/artifacts/metadata';
export const saveMetadataUrl = 'http://localhost:3000/explore/v1/artifact/metadata/', putMetadataUrl = saveMetadataUrl, patchMetadataUrl = putMetadataUrl;
