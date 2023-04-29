
import _getHandler from './api-handler';

export const getEventData = () => {
  return _getHandler('event-data', '/api/data.json');
};

export const getUserData = () => {
  return _getHandler('user-data', '/api/data-user.json');
};

export const getTaskTypes = () => {
  return _getHandler('task-types', '/api/task-types.json');
};

export const getStatusTypes = () => {
  return _getHandler('status-types', '/api/status-types.json');
};

export const getEventTypes = () => {
  return _getHandler('event-types', '/api/event-types.json');
};
