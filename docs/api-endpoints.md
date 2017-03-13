# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id/`
- `GET /api/users/:id/photos`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `GET /api/photos/:id`
- `POST /api/photos`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows

- `POST /api/users/:id/follow`
- `DELETE /api/users/:id/unfollow`
