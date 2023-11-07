import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <div>feed</div>,
      },
      {
        path: 'feed',
        element: <div>feed</div>,
      },
      {
        path: 'feed/create',
        element: <div>feed create</div>,
      },
      {
        path: 'feed/:feedId',
        element: <div>feed feedId</div>,
      },
      {
        path: 'feed/:feedId/edit',
        element: <div>feed feedId edit</div>,
      },
      {
        path: 'vote',
        element: <div>vote</div>,
      },
      {
        path: 'vote/create',
        element: <div>vote create</div>,
      },
      {
        path: 'vote/:voteId',
        element: <div>vote voteId</div>,
      },
      {
        path: 'search',
        element: <div>search</div>,
      },
      {
        path: 'search/result',
        element: <div>search result</div>,
      },
      {
        path: 'item',
        element: <div>item</div>,
      },
      {
        path: 'item/create',
        element: <div>item create</div>,
      },
      {
        path: 'item/:itemId',
        element: <div>item itemId</div>,
      },
      {
        path: 'item/:itemId/review/create',
        element: <div>item itemId review create</div>,
      },
      {
        path: 'review/:reviewId/edit',
        element: <div>review reviewId edit</div>,
      },
      {
        path: 'user/edit',
        element: <div>user edit</div>,
      },
      {
        path: 'user/edit/password',
        element: <div>user edit password</div>,
      },
      {
        path: 'user/:userId',
        element: <div>user userId</div>,
      },
      {
        path: 'user/:userId/inventory',
        element: <div>user userId inventory</div>,
      },
      {
        path: 'user/:userId/inventory/:inventoryId',
        element: <div>user userId inventory inventoryId</div>,
      },
      {
        path: 'inventory/create',
        element: <div>inventory create</div>,
      },
      {
        path: 'user/:userId/bucket',
        element: <div>user userId bucket</div>,
      },
      {
        path: 'user/:userId/bucket/:bucketId',
        element: <div>user userId bucket bucketId</div>,
      },
      {
        path: 'bucket/create',
        element: <div>bucket create</div>,
      },
      {
        path: 'user/:userId/feed',
        element: <div>user userId feed</div>,
      },
      {
        path: 'login',
        element: <div>login</div>,
      },
      {
        path: 'signup',
        element: <div>signup</div>,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
]);